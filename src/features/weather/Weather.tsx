import { useState } from 'react'
import { Autocomplete, TextField, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import { useTranslation } from 'react-i18next'
import {
  useGetCitiesQuery,
  useGetForecastQuery,
} from '@/features/weather/data/api.ts'
import { GeoItem } from '@/features/weather/data/types.ts'
import ForecastChart from '@/features/weather/ForecastChart.tsx'
import { APP_ID } from '@/utils/constants.ts'

export default function Weather() {
  const [query, setQuery] = useState('')
  const [selectedCity, setSelectedCity] = useState<GeoItem | null>(null)

  const { t } = useTranslation()

  const { data: cities, isFetching: isFetchingCities } = useGetCitiesQuery(
    {
      q: query,
      limit: '5',
      appid: APP_ID,
    },
    { skip: !query },
  )

  const { data: forecastData } = useGetForecastQuery(
    {
      lat: String(selectedCity?.lat),
      lon: String(selectedCity?.lon),
      units: 'metric',
      appid: APP_ID,
    },
    { skip: !selectedCity },
  )

  return (
    <>
      <Box maxWidth={'20rem'} mx={'auto'} mt={3}>
        <Autocomplete
          options={cities || []}
          inputValue={query}
          filterOptions={(options) => options}
          getOptionLabel={(option) => option?.name || ''}
          loading={isFetchingCities}
          onInputChange={(_, newValue) => setQuery(newValue)}
          onChange={(_, newValue) => setSelectedCity(newValue || null)}
          renderOption={(props, option) => {
            return (
              <li {...props} key={JSON.stringify(option)}>
                <Box>
                  <Typography variant={'h6'} fontWeight={'bold'}>
                    {option?.name}
                  </Typography>
                  <Typography>{option?.country}</Typography>
                </Box>
              </li>
            )
          }}
          renderInput={(params) => (
            <TextField {...params} label={t('searchCity')} variant="outlined" />
          )}
        />
      </Box>

      <ForecastChart data={forecastData} />
    </>
  )
}
