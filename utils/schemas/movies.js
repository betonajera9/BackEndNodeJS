import joi from 'joi'

const movieTitleSchema = joi.string().max(80)

const movieYearSchema = joi
	.number()
	.min(1888)
	.max(2077)

const movieCoverSchema = joi.string().uri()

const movieDescriptionSchema = joi.string().max(300)

const movieDurationSchema = joi
	.number()
	.min(1)
	.max(300)
const movieContentRatingSchema = joi.string().max(5)
const movieSourceSchema = joi.string().uri()
const movieTagsSchema = joi.array().items(joi.string().max(50))

export const createMovieSchema = joi.object({
	title: movieTitleSchema.required(),
	year: movieYearSchema.required(),
	cover: movieCoverSchema.required(),
	description: movieDescriptionSchema.required(),
	duration: movieDurationSchema.required(),
	contentRating: movieContentRatingSchema.required(),
	source: movieSourceSchema.required(),
	tags: movieTagsSchema,
})

export const updateMovieSchema = joi.object({
	title: movieTitleSchema,
	year: movieYearSchema,
	cover: movieCoverSchema,
	description: movieDescriptionSchema,
	duration: movieDurationSchema,
	contentRating: movieContentRatingSchema,
	source: movieSourceSchema,
	tags: movieTagsSchema,
})

export const movieIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/)
