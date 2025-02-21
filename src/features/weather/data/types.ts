import { z } from 'zod'

// geo
const LocalNamesSchema = z.record(z.string(), z.string()).optional()

export const GeoItemSchema = z
  .object({
    name: z.string().optional(),
    local_names: LocalNamesSchema,
    lat: z.number().optional(),
    lon: z.number().optional(),
    country: z.string().optional(),
    state: z.string().optional(),
  })
  .optional()
export type GeoItem = z.infer<typeof GeoItemSchema>
// geo

// forecast item
const CloudsSchema = z
  .object({
    all: z.number().optional(),
  })
  .optional()

const MainSchema = z
  .object({
    temp: z.number().optional(),
    feels_like: z.number().optional(),
    temp_min: z.number().optional(),
    temp_max: z.number().optional(),
    pressure: z.number().optional(),
    sea_level: z.number().optional(),
    grnd_level: z.number().optional(),
    humidity: z.number().optional(),
    temp_kf: z.number().optional(),
  })
  .optional()

const SysSchema = z
  .object({
    pod: z.string().optional(),
  })
  .optional()

const WeatherSchema = z
  .object({
    id: z.number().optional(),
    main: z.string().optional(),
    description: z.string().optional(),
    icon: z.string().optional(),
  })
  .optional()

const WindSchema = z
  .object({
    speed: z.number().optional(),
    deg: z.number().optional(),
    gust: z.number().optional(),
  })
  .optional()

const ForecastItemSchema = z
  .object({
    dt: z.number().optional(),
    main: MainSchema,
    weather: z.array(WeatherSchema).optional(),
    clouds: CloudsSchema,
    wind: WindSchema,
    visibility: z.number().optional(),
    pop: z.number().optional(),
    sys: SysSchema,
    dt_txt: z.string().optional(),
  })
  .optional()
// forecast item

// city
const CoordSchema = z
  .object({
    lat: z.number().optional(),
    lon: z.number().optional(),
  })
  .optional()

const CitySchema = z
  .object({
    id: z.number().optional(),
    name: z.string().optional(),
    coord: CoordSchema,
    country: z.string().optional(),
    population: z.number().optional(),
    timezone: z.number().optional(),
    sunrise: z.number().optional(),
    sunset: z.number().optional(),
  })
  .optional()
export type City = z.infer<typeof CitySchema>
// city

// forecast
export const ForecastSchema = z
  .object({
    city: CitySchema,
    cnt: z.number().optional(),
    cod: z.string().optional(),
    list: z.array(ForecastItemSchema).optional(),
    message: z.number().optional(),
  })
  .optional()
export type Forecast = z.infer<typeof ForecastSchema>
// forecast
