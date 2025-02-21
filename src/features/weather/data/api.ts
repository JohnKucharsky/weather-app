import { z } from 'zod'
import {
  Forecast,
  ForecastSchema,
  GeoItem,
  GeoItemSchema,
} from '@/features/weather/data/types.ts'
import { baseApi } from '@/redux/utils.ts'
import { WEATHER_URL, GEO_URL } from '@/utils/constants.ts'
import { getQueryString } from '@/utils/helpers.ts'

const weatherApiSlice = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getForecast: build.query<
      Forecast,
      { lat: string; lon: string; units: string; appid: string }
    >({
      query: (params) => `${WEATHER_URL}${getQueryString(params)}`,
      transformResponse: (res) => ForecastSchema.parse(res),
    }),
    getCities: build.query<
      GeoItem[],
      {
        q: string
        limit: string
        appid: string
      }
    >({
      query: (params) => `${GEO_URL}${getQueryString(params)}`,
      transformResponse: (res) => z.array(GeoItemSchema).parse(res),
    }),
  }),
  overrideExisting: false,
})

export const { useGetForecastQuery, useGetCitiesQuery } = weatherApiSlice
