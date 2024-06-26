const GrossYieldV1RentalMarketMetricsParclIdGrossYieldGet = {
	metadata: {
		allOf: [
			{
				type: "object",
				properties: {
					parcl_id: {
						type: "integer",
						description:
							"A unique id for a given geographic market in the Parcl Labs API. Parcl_ids are unique and independent of each other, without any hierarchical structure. For example, the parcl_id for Brooklyn, NY bears no relationship to the parcl_id for the New York Metropolitan Statistical Area (MSA), even though Brooklyn is a part of the New York MSA.",
						examples: [2900187],
						title: "Parcl Id",
						$schema: "https://json-schema.org/draft/2020-12/schema#",
					},
				},
				required: ["parcl_id"],
			},
			{
				type: "object",
				properties: {
					property_type: {
						description:
							"The type of property the data is associated with. Allows for filtering based on property type.",
						examples: ["SINGLE_FAMILY", "CONDO", "TOWNHOUSE"],
						default: "ALL_PROPERTIES",
						title: "Property Type",
						type: "string",
						enum: ["SINGLE_FAMILY", "CONDO", "TOWNHOUSE", "ALL_PROPERTIES"],
						$schema: "https://json-schema.org/draft/2020-12/schema#",
					},
					start_date: {
						anyOf: [{ type: "string", format: "date" }, { type: "null" }],
						description:
							"Specifies the beginning of the query period, inclusive, in ISO 8601 format, i.e. YYYY-MM-DD. Defaults to null.",
						examples: ["2020-01-01"],
						title: "Start Date",
						$schema: "https://json-schema.org/draft/2020-12/schema#",
					},
					end_date: {
						anyOf: [{ type: "string", format: "date" }, { type: "null" }],
						description:
							"Specifies the end of the query period, inclusive, in ISO 8601 format, i.e. YYYY-MM-DD. Defaults to null.",
						examples: ["2022-01-01"],
						title: "End Date",
						$schema: "https://json-schema.org/draft/2020-12/schema#",
					},
					limit: {
						type: "integer",
						maximum: 1000,
						minimum: 1,
						description: "Page size limit",
						default: 12,
						title: "Limit",
						$schema: "https://json-schema.org/draft/2020-12/schema#",
					},
					offset: {
						type: "integer",
						minimum: 0,
						description: "Page offset",
						default: 0,
						title: "Offset",
						$schema: "https://json-schema.org/draft/2020-12/schema#",
					},
				},
				required: [],
			},
		],
	},
	response: {
		"200": {
			properties: {
				items: {
					items: {
						properties: {
							date: {
								type: "string",
								format: "date",
								title: "Date",
								description:
									"Date in format YYYY-MM-DD. Data reflects the full month indicated by the date (YYYY-MM-DD), with updates on the 15th of the following month to include all events from the previous month. For example, data for January ('2024-01-01') is available on February 15th to include January's events. On the 15th of each month, data is revised to incorporate any new events recorded for the specified month after the initial update, ensuring the most accurate reflection of events",
							},
							pct_gross_yield: {
								anyOf: [{ type: "number" }, { type: "null" }],
								title: "Pct Gross Yield",
								description:
									"Percent gross yield within a given month, calculated by dividing the annual median rental income (monthly median new_rental_listing price × 12) by the median new_listings_for_sale price, then multiplying by 100 to convert the result into a percentage\n\nNULL: insufficient data",
							},
						},
						type: "object",
						required: ["date", "pct_gross_yield"],
						title: "GrossYieldPercentageMonthlySchema",
					},
					type: "array",
					title: "Items",
				},
				total: { anyOf: [{ type: "integer", minimum: 0 }, { type: "null" }], title: "Total" },
				limit: { anyOf: [{ type: "integer", minimum: 1 }, { type: "null" }], title: "Limit" },
				offset: { anyOf: [{ type: "integer", minimum: 0 }, { type: "null" }], title: "Offset" },
				links: {
					properties: {
						first: {
							anyOf: [{ type: "string" }, { type: "null" }],
							title: "First",
							examples: ["/api/v1/users?limit=1&offset1"],
						},
						last: {
							anyOf: [{ type: "string" }, { type: "null" }],
							title: "Last",
							examples: ["/api/v1/users?limit=1&offset1"],
						},
						self: {
							anyOf: [{ type: "string" }, { type: "null" }],
							title: "Self",
							examples: ["/api/v1/users?limit=1&offset1"],
						},
						next: {
							anyOf: [{ type: "string" }, { type: "null" }],
							title: "Next",
							examples: ["/api/v1/users?limit=1&offset1"],
						},
						prev: {
							anyOf: [{ type: "string" }, { type: "null" }],
							title: "Prev",
							examples: ["/api/v1/users?limit=1&offset1"],
						},
					},
					type: "object",
					required: ["first", "last", "self", "next", "prev"],
					title: "Links",
				},
			},
			type: "object",
			required: ["items", "total", "limit", "offset", "links"],
			title: "LimitOffsetPage[GrossYieldPercentageMonthlySchema]",
			$schema: "https://json-schema.org/draft/2020-12/schema#",
		},
		"401": { $schema: "https://json-schema.org/draft/2020-12/schema#" },
		"403": { $schema: "https://json-schema.org/draft/2020-12/schema#" },
		"404": { $schema: "https://json-schema.org/draft/2020-12/schema#" },
		"422": { $schema: "https://json-schema.org/draft/2020-12/schema#" },
		"500": { $schema: "https://json-schema.org/draft/2020-12/schema#" },
	},
} as const;
const HousingEventCountsV1InvestorMetricsParclIdHousingEventCountsGet = {
	metadata: {
		allOf: [
			{
				type: "object",
				properties: {
					parcl_id: {
						type: "integer",
						description:
							"A unique id for a given geographic market in the Parcl Labs API. Parcl_ids are unique and independent of each other, without any hierarchical structure. For example, the parcl_id for Brooklyn, NY bears no relationship to the parcl_id for the New York Metropolitan Statistical Area (MSA), even though Brooklyn is a part of the New York MSA.",
						examples: [2900187],
						title: "Parcl Id",
						$schema: "https://json-schema.org/draft/2020-12/schema#",
					},
				},
				required: ["parcl_id"],
			},
			{
				type: "object",
				properties: {
					start_date: {
						anyOf: [{ type: "string", format: "date" }, { type: "null" }],
						description:
							"Specifies the beginning of the query period, inclusive, in ISO 8601 format, i.e. YYYY-MM-DD. Defaults to null.",
						examples: ["2020-01-01"],
						title: "Start Date",
						$schema: "https://json-schema.org/draft/2020-12/schema#",
					},
					end_date: {
						anyOf: [{ type: "string", format: "date" }, { type: "null" }],
						description:
							"Specifies the end of the query period, inclusive, in ISO 8601 format, i.e. YYYY-MM-DD. Defaults to null.",
						examples: ["2022-01-01"],
						title: "End Date",
						$schema: "https://json-schema.org/draft/2020-12/schema#",
					},
					limit: {
						type: "integer",
						maximum: 1000,
						minimum: 1,
						description: "Page size limit",
						default: 12,
						title: "Limit",
						$schema: "https://json-schema.org/draft/2020-12/schema#",
					},
					offset: {
						type: "integer",
						minimum: 0,
						description: "Page offset",
						default: 0,
						title: "Offset",
						$schema: "https://json-schema.org/draft/2020-12/schema#",
					},
				},
				required: [],
			},
		],
	},
	response: {
		"200": {
			properties: {
				items: {
					items: {
						properties: {
							date: {
								type: "string",
								format: "date",
								title: "Date",
								description:
									"Date in format YYYY-MM-DD. Data reflects the full month indicated by the date (YYYY-MM-DD), with updates on the 15th of the following month to include all events from the previous month. For example, data for January ('2024-01-01') is available on February 15th to include January's events. On the 15th of each month, data is revised to incorporate any new events recorded for the specified month after the initial update, ensuring the most accurate reflection of events.",
							},
							acquisitions: {
								type: "integer",
								title: "Acquisitions",
								description:
									"Total number of property purchases by investors for the specified <parcl_id> within the given month",
							},
							dispositions: {
								type: "integer",
								title: "Dispositions",
								description:
									"Total number of property sales by investors for the specified <parcl_id> within the given month",
							},
							new_listings_for_sale: {
								type: "integer",
								title: "New Listings For Sale",
								description:
									"Total number of investor-owned properties newly listed for sale for the specified <parcl_id> within the given month",
							},
							new_rental_listings: {
								type: "integer",
								title: "New Rental Listings",
								description:
									"Total number of investor-owned properties newly listed for rent for the specified <parcl_id> within the given month",
							},
						},
						type: "object",
						required: ["date", "acquisitions", "dispositions", "new_listings_for_sale", "new_rental_listings"],
						title: "InvestorHousingEventCountsMonthlySchema",
					},
					type: "array",
					title: "Items",
				},
				total: { anyOf: [{ type: "integer", minimum: 0 }, { type: "null" }], title: "Total" },
				limit: { anyOf: [{ type: "integer", minimum: 1 }, { type: "null" }], title: "Limit" },
				offset: { anyOf: [{ type: "integer", minimum: 0 }, { type: "null" }], title: "Offset" },
				links: {
					properties: {
						first: {
							anyOf: [{ type: "string" }, { type: "null" }],
							title: "First",
							examples: ["/api/v1/users?limit=1&offset1"],
						},
						last: {
							anyOf: [{ type: "string" }, { type: "null" }],
							title: "Last",
							examples: ["/api/v1/users?limit=1&offset1"],
						},
						self: {
							anyOf: [{ type: "string" }, { type: "null" }],
							title: "Self",
							examples: ["/api/v1/users?limit=1&offset1"],
						},
						next: {
							anyOf: [{ type: "string" }, { type: "null" }],
							title: "Next",
							examples: ["/api/v1/users?limit=1&offset1"],
						},
						prev: {
							anyOf: [{ type: "string" }, { type: "null" }],
							title: "Prev",
							examples: ["/api/v1/users?limit=1&offset1"],
						},
					},
					type: "object",
					required: ["first", "last", "self", "next", "prev"],
					title: "Links",
				},
			},
			type: "object",
			required: ["items", "total", "limit", "offset", "links"],
			title: "LimitOffsetPage[InvestorHousingEventCountsMonthlySchema]",
			$schema: "https://json-schema.org/draft/2020-12/schema#",
		},
		"401": { $schema: "https://json-schema.org/draft/2020-12/schema#" },
		"403": { $schema: "https://json-schema.org/draft/2020-12/schema#" },
		"404": { $schema: "https://json-schema.org/draft/2020-12/schema#" },
		"422": { $schema: "https://json-schema.org/draft/2020-12/schema#" },
		"500": { $schema: "https://json-schema.org/draft/2020-12/schema#" },
	},
} as const;
const HousingEventCountsV1MarketMetricsParclIdHousingEventCountsGet = {
	metadata: {
		allOf: [
			{
				type: "object",
				properties: {
					parcl_id: {
						type: "integer",
						description:
							"A unique id for a given geographic market in the Parcl Labs API. Parcl_ids are unique and independent of each other, without any hierarchical structure. For example, the parcl_id for Brooklyn, NY bears no relationship to the parcl_id for the New York Metropolitan Statistical Area (MSA), even though Brooklyn is a part of the New York MSA.",
						examples: [2900187],
						title: "Parcl Id",
						$schema: "https://json-schema.org/draft/2020-12/schema#",
					},
				},
				required: ["parcl_id"],
			},
			{
				type: "object",
				properties: {
					property_type: {
						description:
							"The type of property the data is associated with. Allows for filtering based on property type.",
						examples: ["SINGLE_FAMILY", "CONDO", "TOWNHOUSE"],
						default: "ALL_PROPERTIES",
						title: "Property Type",
						type: "string",
						enum: ["SINGLE_FAMILY", "CONDO", "TOWNHOUSE", "ALL_PROPERTIES"],
						$schema: "https://json-schema.org/draft/2020-12/schema#",
					},
					start_date: {
						anyOf: [{ type: "string", format: "date" }, { type: "null" }],
						description:
							"Specifies the beginning of the query period, inclusive, in ISO 8601 format, i.e. YYYY-MM-DD. Defaults to null.",
						examples: ["2020-01-01"],
						title: "Start Date",
						$schema: "https://json-schema.org/draft/2020-12/schema#",
					},
					end_date: {
						anyOf: [{ type: "string", format: "date" }, { type: "null" }],
						description:
							"Specifies the end of the query period, inclusive, in ISO 8601 format, i.e. YYYY-MM-DD. Defaults to null.",
						examples: ["2022-01-01"],
						title: "End Date",
						$schema: "https://json-schema.org/draft/2020-12/schema#",
					},
					limit: {
						type: "integer",
						maximum: 1000,
						minimum: 1,
						description: "Page size limit",
						default: 12,
						title: "Limit",
						$schema: "https://json-schema.org/draft/2020-12/schema#",
					},
					offset: {
						type: "integer",
						minimum: 0,
						description: "Page offset",
						default: 0,
						title: "Offset",
						$schema: "https://json-schema.org/draft/2020-12/schema#",
					},
				},
				required: [],
			},
		],
	},
	response: {
		"200": {
			properties: {
				items: {
					items: {
						properties: {
							date: {
								type: "string",
								format: "date",
								title: "Date",
								description:
									"Date in format YYYY-MM-DD. Data reflects the full month indicated by the date (YYYY-MM-DD), with updates on the 15th of the following month to include all events from the previous month. For example, data for January ('2024-01-01') is available on February 15th to include January's events. On the 15th of each month, data is revised to incorporate any new events recorded for the specified month after the initial update, ensuring the most accurate reflection of events.",
							},
							sales: {
								type: "integer",
								title: "Sales",
								description: "Completed home sale transactions for the specified <parcl_id> within the given month",
							},
							new_listings_for_sale: {
								type: "integer",
								title: "New Listings For Sale",
								description: "Properties newly listed for sale for the specified <parcl_id> within the given month",
							},
							new_rental_listings: {
								type: "integer",
								title: "New Rental Listings",
								description: "Properties newly listed for rent for the specified <parcl_id> within the given month",
							},
						},
						type: "object",
						required: ["date", "sales", "new_listings_for_sale", "new_rental_listings"],
						title: "HousingEventCountsMonthlySchema",
					},
					type: "array",
					title: "Items",
				},
				total: { anyOf: [{ type: "integer", minimum: 0 }, { type: "null" }], title: "Total" },
				limit: { anyOf: [{ type: "integer", minimum: 1 }, { type: "null" }], title: "Limit" },
				offset: { anyOf: [{ type: "integer", minimum: 0 }, { type: "null" }], title: "Offset" },
				links: {
					properties: {
						first: {
							anyOf: [{ type: "string" }, { type: "null" }],
							title: "First",
							examples: ["/api/v1/users?limit=1&offset1"],
						},
						last: {
							anyOf: [{ type: "string" }, { type: "null" }],
							title: "Last",
							examples: ["/api/v1/users?limit=1&offset1"],
						},
						self: {
							anyOf: [{ type: "string" }, { type: "null" }],
							title: "Self",
							examples: ["/api/v1/users?limit=1&offset1"],
						},
						next: {
							anyOf: [{ type: "string" }, { type: "null" }],
							title: "Next",
							examples: ["/api/v1/users?limit=1&offset1"],
						},
						prev: {
							anyOf: [{ type: "string" }, { type: "null" }],
							title: "Prev",
							examples: ["/api/v1/users?limit=1&offset1"],
						},
					},
					type: "object",
					required: ["first", "last", "self", "next", "prev"],
					title: "Links",
				},
			},
			type: "object",
			required: ["items", "total", "limit", "offset", "links"],
			title: "LimitOffsetPage[HousingEventCountsMonthlySchema]",
			$schema: "https://json-schema.org/draft/2020-12/schema#",
		},
		"401": { $schema: "https://json-schema.org/draft/2020-12/schema#" },
		"403": { $schema: "https://json-schema.org/draft/2020-12/schema#" },
		"404": { $schema: "https://json-schema.org/draft/2020-12/schema#" },
		"422": { $schema: "https://json-schema.org/draft/2020-12/schema#" },
		"500": { $schema: "https://json-schema.org/draft/2020-12/schema#" },
	},
} as const;
const HousingEventPricesV1InvestorMetricsParclIdHousingEventPricesGet = {
	metadata: {
		allOf: [
			{
				type: "object",
				properties: {
					parcl_id: {
						type: "integer",
						description:
							"A unique id for a given geographic market in the Parcl Labs API. Parcl_ids are unique and independent of each other, without any hierarchical structure. For example, the parcl_id for Brooklyn, NY bears no relationship to the parcl_id for the New York Metropolitan Statistical Area (MSA), even though Brooklyn is a part of the New York MSA.",
						examples: [2900187],
						title: "Parcl Id",
						$schema: "https://json-schema.org/draft/2020-12/schema#",
					},
				},
				required: ["parcl_id"],
			},
			{
				type: "object",
				properties: {
					start_date: {
						anyOf: [{ type: "string", format: "date" }, { type: "null" }],
						description:
							"Specifies the beginning of the query period, inclusive, in ISO 8601 format, i.e. YYYY-MM-DD. Defaults to null.",
						examples: ["2020-01-01"],
						title: "Start Date",
						$schema: "https://json-schema.org/draft/2020-12/schema#",
					},
					end_date: {
						anyOf: [{ type: "string", format: "date" }, { type: "null" }],
						description:
							"Specifies the end of the query period, inclusive, in ISO 8601 format, i.e. YYYY-MM-DD. Defaults to null.",
						examples: ["2022-01-01"],
						title: "End Date",
						$schema: "https://json-schema.org/draft/2020-12/schema#",
					},
					limit: {
						type: "integer",
						maximum: 1000,
						minimum: 1,
						description: "Page size limit",
						default: 12,
						title: "Limit",
						$schema: "https://json-schema.org/draft/2020-12/schema#",
					},
					offset: {
						type: "integer",
						minimum: 0,
						description: "Page offset",
						default: 0,
						title: "Offset",
						$schema: "https://json-schema.org/draft/2020-12/schema#",
					},
				},
				required: [],
			},
		],
	},
	response: {
		"200": {
			properties: {
				items: {
					items: {
						properties: {
							date: {
								type: "string",
								format: "date",
								title: "Date",
								description:
									"Date in format YYYY-MM-DD. Data reflects the full month indicated by the date (YYYY-MM-DD), with updates on the 15th of the following month to include all events from the previous month. For example, data for January ('2024-01-01') is available on February 15th to include January's events. On the 15th of each month, data is revised to incorporate any new events recorded for the specified month after the initial update, ensuring the most accurate reflection of events",
							},
							price: {
								description:
									"Total transactional price for a housing event. For new_rental_listings, the price represents the monthly rate",
								type: "object",
								required: ["median"],
								title: "InvestorHousingEventMedianPriceSchema",
								properties: {
									median: {
										type: "object",
										required: ["acquisitions", "dispositions", "new_listings_for_sale", "new_rental_listings"],
										title: "InvestorHousingEventPriceSchema",
										properties: {
											acquisitions: {
												anyOf: [{ type: "integer" }, { type: "null" }],
												title: "Acquisitions",
												description:
													"Property purchases by investors for the specified <parcl_id> within the given month",
											},
											dispositions: {
												anyOf: [{ type: "integer" }, { type: "null" }],
												title: "Dispositions",
												description: "Property sales by investors for the specified <parcl_id> within the given month",
											},
											new_listings_for_sale: {
												anyOf: [{ type: "integer" }, { type: "null" }],
												title: "New Listings For Sale",
												description:
													"Investor-owned properties newly listed for sale for the specified <parcl_id> within the given month",
											},
											new_rental_listings: {
												anyOf: [{ type: "integer" }, { type: "null" }],
												title: "New Rental Listings",
												description:
													"Investor-owned properties newly listed for rent for the specified <parcl_id> within the given month",
											},
										},
									},
								},
							},
							price_per_square_foot: {
								description:
									"Transactional price for a housing event, normalized by property size to facilitate standardized comparisons. For new_rental_listings, the price per square foot represents the monthly rate",
								type: "object",
								required: ["median"],
								title: "InvestorHousingEventMedianPPSFSchema",
								properties: {
									median: {
										type: "object",
										required: ["acquisitions", "dispositions", "new_listings_for_sale", "new_rental_listings"],
										title: "InvestorHousingEventPPSFSchema",
										properties: {
											acquisitions: {
												anyOf: [{ type: "number" }, { type: "null" }],
												title: "Acquisitions",
												description:
													"Property purchases by investors for the specified <parcl_id> within the given month",
											},
											dispositions: {
												anyOf: [{ type: "number" }, { type: "null" }],
												title: "Dispositions",
												description: "Property sales by investors for the specified <parcl_id> within the given month",
											},
											new_listings_for_sale: {
												anyOf: [{ type: "number" }, { type: "null" }],
												title: "New Listings For Sale",
												description:
													"Investor-owned properties newly listed for sale for the specified <parcl_id> within the given month",
											},
											new_rental_listings: {
												anyOf: [{ type: "number" }, { type: "null" }],
												title: "New Rental Listings",
												description:
													"Investor-owned properties newly listed for rent for the specified <parcl_id> within the given month",
											},
										},
									},
								},
							},
						},
						type: "object",
						required: ["date", "price", "price_per_square_foot"],
						title: "InvestorHousingEventPricesMonthlySchema",
					},
					type: "array",
					title: "Items",
				},
				total: { anyOf: [{ type: "integer", minimum: 0 }, { type: "null" }], title: "Total" },
				limit: { anyOf: [{ type: "integer", minimum: 1 }, { type: "null" }], title: "Limit" },
				offset: { anyOf: [{ type: "integer", minimum: 0 }, { type: "null" }], title: "Offset" },
				links: {
					properties: {
						first: {
							anyOf: [{ type: "string" }, { type: "null" }],
							title: "First",
							examples: ["/api/v1/users?limit=1&offset1"],
						},
						last: {
							anyOf: [{ type: "string" }, { type: "null" }],
							title: "Last",
							examples: ["/api/v1/users?limit=1&offset1"],
						},
						self: {
							anyOf: [{ type: "string" }, { type: "null" }],
							title: "Self",
							examples: ["/api/v1/users?limit=1&offset1"],
						},
						next: {
							anyOf: [{ type: "string" }, { type: "null" }],
							title: "Next",
							examples: ["/api/v1/users?limit=1&offset1"],
						},
						prev: {
							anyOf: [{ type: "string" }, { type: "null" }],
							title: "Prev",
							examples: ["/api/v1/users?limit=1&offset1"],
						},
					},
					type: "object",
					required: ["first", "last", "self", "next", "prev"],
					title: "Links",
				},
			},
			type: "object",
			required: ["items", "total", "limit", "offset", "links"],
			title: "LimitOffsetPage[InvestorHousingEventPricesMonthlySchema]",
			$schema: "https://json-schema.org/draft/2020-12/schema#",
		},
		"401": { $schema: "https://json-schema.org/draft/2020-12/schema#" },
		"403": { $schema: "https://json-schema.org/draft/2020-12/schema#" },
		"404": { $schema: "https://json-schema.org/draft/2020-12/schema#" },
		"422": { $schema: "https://json-schema.org/draft/2020-12/schema#" },
		"500": { $schema: "https://json-schema.org/draft/2020-12/schema#" },
	},
} as const;
const HousingEventPricesV1MarketMetricsParclIdHousingEventPricesGet = {
	metadata: {
		allOf: [
			{
				type: "object",
				properties: {
					parcl_id: {
						type: "integer",
						description:
							"A unique id for a given geographic market in the Parcl Labs API. Parcl_ids are unique and independent of each other, without any hierarchical structure. For example, the parcl_id for Brooklyn, NY bears no relationship to the parcl_id for the New York Metropolitan Statistical Area (MSA), even though Brooklyn is a part of the New York MSA.",
						examples: [2900187],
						title: "Parcl Id",
						$schema: "https://json-schema.org/draft/2020-12/schema#",
					},
				},
				required: ["parcl_id"],
			},
			{
				type: "object",
				properties: {
					property_type: {
						description:
							"The type of property the data is associated with. Allows for filtering based on property type.",
						examples: ["SINGLE_FAMILY", "CONDO", "TOWNHOUSE"],
						default: "ALL_PROPERTIES",
						title: "Property Type",
						type: "string",
						enum: ["SINGLE_FAMILY", "CONDO", "TOWNHOUSE", "ALL_PROPERTIES"],
						$schema: "https://json-schema.org/draft/2020-12/schema#",
					},
					start_date: {
						anyOf: [{ type: "string", format: "date" }, { type: "null" }],
						description:
							"Specifies the beginning of the query period, inclusive, in ISO 8601 format, i.e. YYYY-MM-DD. Defaults to null.",
						examples: ["2020-01-01"],
						title: "Start Date",
						$schema: "https://json-schema.org/draft/2020-12/schema#",
					},
					end_date: {
						anyOf: [{ type: "string", format: "date" }, { type: "null" }],
						description:
							"Specifies the end of the query period, inclusive, in ISO 8601 format, i.e. YYYY-MM-DD. Defaults to null.",
						examples: ["2022-01-01"],
						title: "End Date",
						$schema: "https://json-schema.org/draft/2020-12/schema#",
					},
					limit: {
						type: "integer",
						maximum: 1000,
						minimum: 1,
						description: "Page size limit",
						default: 12,
						title: "Limit",
						$schema: "https://json-schema.org/draft/2020-12/schema#",
					},
					offset: {
						type: "integer",
						minimum: 0,
						description: "Page offset",
						default: 0,
						title: "Offset",
						$schema: "https://json-schema.org/draft/2020-12/schema#",
					},
				},
				required: [],
			},
		],
	},
	response: {
		"200": {
			properties: {
				items: {
					items: {
						properties: {
							date: {
								type: "string",
								format: "date",
								title: "Date",
								description:
									"Date in format YYYY-MM-DD. Data reflects the full month indicated by the date (YYYY-MM-DD), with updates on the 15th of the following month to include all events from the previous month. For example, data for January ('2024-01-01') is available on February 15th to include January's events. On the 15th of each month, data is revised to incorporate any new events recorded for the specified month after the initial update, ensuring the most accurate reflection of events",
							},
							price: {
								description:
									"Total transactional price for a housing event. For new_rental_listings, the price represents the monthly rate",
								type: "object",
								required: ["median", "standard_deviation", "percentile_20th", "percentile_80th"],
								title: "HousingEventPricesSchema",
								properties: {
									median: {
										type: "object",
										required: ["sales", "new_listings_for_sale", "new_rental_listings"],
										title: "HousingEventPriceDetailSchema",
										properties: {
											sales: {
												anyOf: [{ type: "integer" }, { type: "null" }],
												title: "Sales",
												description:
													"Completed home sale transactions for the specified <parcl_id> within the given month",
											},
											new_listings_for_sale: {
												anyOf: [{ type: "integer" }, { type: "null" }],
												title: "New Listings For Sale",
												description:
													"Properties newly listed for sale for the specified <parcl_id> within the given month",
											},
											new_rental_listings: {
												anyOf: [{ type: "integer" }, { type: "null" }],
												title: "New Rental Listings",
												description:
													"Properties newly listed for rent for the specified <parcl_id> within the given month",
											},
										},
									},
									standard_deviation: {
										description:
											"Represents the variability of housing event prices around the median price within a specific <parcl_id> for a given month. It is measured in the same unit as the event price (e.g., USD for sales and listings, USD per month for rentals)\n\nNULL: indicates insufficient data to calculate the standard deviation. This occurs in scenarios where the standard deviation cannot be computed because there is only 1 observed price",
										type: "object",
										required: ["sales", "new_listings_for_sale", "new_rental_listings"],
										title: "HousingEventPriceDetailSchema",
										properties: {
											sales: {
												anyOf: [{ type: "integer" }, { type: "null" }],
												title: "Sales",
												description:
													"Completed home sale transactions for the specified <parcl_id> within the given month",
											},
											new_listings_for_sale: {
												anyOf: [{ type: "integer" }, { type: "null" }],
												title: "New Listings For Sale",
												description:
													"Properties newly listed for sale for the specified <parcl_id> within the given month",
											},
											new_rental_listings: {
												anyOf: [{ type: "integer" }, { type: "null" }],
												title: "New Rental Listings",
												description:
													"Properties newly listed for rent for the specified <parcl_id> within the given month",
											},
										},
									},
									percentile_20th: {
										type: "object",
										required: ["sales", "new_listings_for_sale", "new_rental_listings"],
										title: "HousingEventPriceDetailSchema",
										properties: {
											sales: {
												anyOf: [{ type: "integer" }, { type: "null" }],
												title: "Sales",
												description:
													"Completed home sale transactions for the specified <parcl_id> within the given month",
											},
											new_listings_for_sale: {
												anyOf: [{ type: "integer" }, { type: "null" }],
												title: "New Listings For Sale",
												description:
													"Properties newly listed for sale for the specified <parcl_id> within the given month",
											},
											new_rental_listings: {
												anyOf: [{ type: "integer" }, { type: "null" }],
												title: "New Rental Listings",
												description:
													"Properties newly listed for rent for the specified <parcl_id> within the given month",
											},
										},
									},
									percentile_80th: {
										type: "object",
										required: ["sales", "new_listings_for_sale", "new_rental_listings"],
										title: "HousingEventPriceDetailSchema",
										properties: {
											sales: {
												anyOf: [{ type: "integer" }, { type: "null" }],
												title: "Sales",
												description:
													"Completed home sale transactions for the specified <parcl_id> within the given month",
											},
											new_listings_for_sale: {
												anyOf: [{ type: "integer" }, { type: "null" }],
												title: "New Listings For Sale",
												description:
													"Properties newly listed for sale for the specified <parcl_id> within the given month",
											},
											new_rental_listings: {
												anyOf: [{ type: "integer" }, { type: "null" }],
												title: "New Rental Listings",
												description:
													"Properties newly listed for rent for the specified <parcl_id> within the given month",
											},
										},
									},
								},
							},
							price_per_square_foot: {
								description:
									"Transactional price for a housing event, normalized by property size to facilitate standardized comparisons. For new_rental_listings, the price per square foot represents the monthly rate",
								type: "object",
								required: ["median", "standard_deviation", "percentile_20th", "percentile_80th"],
								title: "HousingEventPricesFloatSchema",
								properties: {
									median: {
										type: "object",
										required: ["sales", "new_listings_for_sale", "new_rental_listings"],
										title: "HousingEventPriceDetailFloatSchema",
										properties: {
											sales: {
												anyOf: [{ type: "number" }, { type: "null" }],
												title: "Sales",
												description:
													"Completed home sale transactions for the specified <parcl_id> within the given month",
											},
											new_listings_for_sale: {
												anyOf: [{ type: "number" }, { type: "null" }],
												title: "New Listings For Sale",
												description:
													"Properties newly listed for sale for the specified <parcl_id> within the given month",
											},
											new_rental_listings: {
												anyOf: [{ type: "number" }, { type: "null" }],
												title: "New Rental Listings",
												description:
													"Properties newly listed for rent for the specified <parcl_id> within the given month",
											},
										},
									},
									standard_deviation: {
										description:
											"Represents the variability of housing event prices around the median price within a specific <parcl_id> for a given month. It is measured in the same unit as the event price (e.g., USD for sales and listings, USD per month for rentals)\n\nNULL: indicates insufficient data to calculate the standard deviation. This occurs in scenarios where the standard deviation cannot be computed because there is only 1 observed price",
										type: "object",
										required: ["sales", "new_listings_for_sale", "new_rental_listings"],
										title: "HousingEventPriceDetailFloatSchema",
										properties: {
											sales: {
												anyOf: [{ type: "number" }, { type: "null" }],
												title: "Sales",
												description:
													"Completed home sale transactions for the specified <parcl_id> within the given month",
											},
											new_listings_for_sale: {
												anyOf: [{ type: "number" }, { type: "null" }],
												title: "New Listings For Sale",
												description:
													"Properties newly listed for sale for the specified <parcl_id> within the given month",
											},
											new_rental_listings: {
												anyOf: [{ type: "number" }, { type: "null" }],
												title: "New Rental Listings",
												description:
													"Properties newly listed for rent for the specified <parcl_id> within the given month",
											},
										},
									},
									percentile_20th: {
										type: "object",
										required: ["sales", "new_listings_for_sale", "new_rental_listings"],
										title: "HousingEventPriceDetailFloatSchema",
										properties: {
											sales: {
												anyOf: [{ type: "number" }, { type: "null" }],
												title: "Sales",
												description:
													"Completed home sale transactions for the specified <parcl_id> within the given month",
											},
											new_listings_for_sale: {
												anyOf: [{ type: "number" }, { type: "null" }],
												title: "New Listings For Sale",
												description:
													"Properties newly listed for sale for the specified <parcl_id> within the given month",
											},
											new_rental_listings: {
												anyOf: [{ type: "number" }, { type: "null" }],
												title: "New Rental Listings",
												description:
													"Properties newly listed for rent for the specified <parcl_id> within the given month",
											},
										},
									},
									percentile_80th: {
										type: "object",
										required: ["sales", "new_listings_for_sale", "new_rental_listings"],
										title: "HousingEventPriceDetailFloatSchema",
										properties: {
											sales: {
												anyOf: [{ type: "number" }, { type: "null" }],
												title: "Sales",
												description:
													"Completed home sale transactions for the specified <parcl_id> within the given month",
											},
											new_listings_for_sale: {
												anyOf: [{ type: "number" }, { type: "null" }],
												title: "New Listings For Sale",
												description:
													"Properties newly listed for sale for the specified <parcl_id> within the given month",
											},
											new_rental_listings: {
												anyOf: [{ type: "number" }, { type: "null" }],
												title: "New Rental Listings",
												description:
													"Properties newly listed for rent for the specified <parcl_id> within the given month",
											},
										},
									},
								},
							},
						},
						type: "object",
						required: ["date", "price", "price_per_square_foot"],
						title: "HousingEventPricesMonthlySchema",
					},
					type: "array",
					title: "Items",
				},
				total: { anyOf: [{ type: "integer", minimum: 0 }, { type: "null" }], title: "Total" },
				limit: { anyOf: [{ type: "integer", minimum: 1 }, { type: "null" }], title: "Limit" },
				offset: { anyOf: [{ type: "integer", minimum: 0 }, { type: "null" }], title: "Offset" },
				links: {
					properties: {
						first: {
							anyOf: [{ type: "string" }, { type: "null" }],
							title: "First",
							examples: ["/api/v1/users?limit=1&offset1"],
						},
						last: {
							anyOf: [{ type: "string" }, { type: "null" }],
							title: "Last",
							examples: ["/api/v1/users?limit=1&offset1"],
						},
						self: {
							anyOf: [{ type: "string" }, { type: "null" }],
							title: "Self",
							examples: ["/api/v1/users?limit=1&offset1"],
						},
						next: {
							anyOf: [{ type: "string" }, { type: "null" }],
							title: "Next",
							examples: ["/api/v1/users?limit=1&offset1"],
						},
						prev: {
							anyOf: [{ type: "string" }, { type: "null" }],
							title: "Prev",
							examples: ["/api/v1/users?limit=1&offset1"],
						},
					},
					type: "object",
					required: ["first", "last", "self", "next", "prev"],
					title: "Links",
				},
			},
			type: "object",
			required: ["items", "total", "limit", "offset", "links"],
			title: "LimitOffsetPage[HousingEventPricesMonthlySchema]",
			$schema: "https://json-schema.org/draft/2020-12/schema#",
		},
		"401": { $schema: "https://json-schema.org/draft/2020-12/schema#" },
		"403": { $schema: "https://json-schema.org/draft/2020-12/schema#" },
		"404": { $schema: "https://json-schema.org/draft/2020-12/schema#" },
		"422": { $schema: "https://json-schema.org/draft/2020-12/schema#" },
		"500": { $schema: "https://json-schema.org/draft/2020-12/schema#" },
	},
} as const;
const HousingStockOwnershipV1InvestorMetricsParclIdHousingStockOwnershipGet = {
	metadata: {
		allOf: [
			{
				type: "object",
				properties: {
					parcl_id: {
						type: "integer",
						description:
							"A unique id for a given geographic market in the Parcl Labs API. Parcl_ids are unique and independent of each other, without any hierarchical structure. For example, the parcl_id for Brooklyn, NY bears no relationship to the parcl_id for the New York Metropolitan Statistical Area (MSA), even though Brooklyn is a part of the New York MSA.",
						examples: [2900187],
						title: "Parcl Id",
						$schema: "https://json-schema.org/draft/2020-12/schema#",
					},
				},
				required: ["parcl_id"],
			},
			{
				type: "object",
				properties: {
					start_date: {
						anyOf: [{ type: "string", format: "date" }, { type: "null" }],
						description:
							"Specifies the beginning of the query period, inclusive, in ISO 8601 format, i.e. YYYY-MM-DD. Defaults to null.",
						examples: ["2020-01-01"],
						title: "Start Date",
						$schema: "https://json-schema.org/draft/2020-12/schema#",
					},
					end_date: {
						anyOf: [{ type: "string", format: "date" }, { type: "null" }],
						description:
							"Specifies the end of the query period, inclusive, in ISO 8601 format, i.e. YYYY-MM-DD. Defaults to null.",
						examples: ["2022-01-01"],
						title: "End Date",
						$schema: "https://json-schema.org/draft/2020-12/schema#",
					},
					limit: {
						type: "integer",
						maximum: 1000,
						minimum: 1,
						description: "Page size limit",
						default: 12,
						title: "Limit",
						$schema: "https://json-schema.org/draft/2020-12/schema#",
					},
					offset: {
						type: "integer",
						minimum: 0,
						description: "Page offset",
						default: 0,
						title: "Offset",
						$schema: "https://json-schema.org/draft/2020-12/schema#",
					},
				},
				required: [],
			},
		],
	},
	response: {
		"200": {
			properties: {
				items: {
					items: {
						properties: {
							date: {
								type: "string",
								format: "date",
								title: "Date",
								description:
									"Date in format YYYY-MM-DD. Data reflects the full month indicated by the date (YYYY-MM-DD), with updates on the 15th of the following month to include all events from the previous month. For example, data for January ('2024-01-01') is available on February 15th to include January's events. On the 15th of each month, data is revised to incorporate any new events recorded for the specified month after the initial update, ensuring the most accurate reflection of events",
							},
							count: {
								type: "integer",
								title: "Count",
								description: "Count of investor-owned properties within the specified <parcl_id>",
							},
							pct_ownership: {
								type: "number",
								title: "Pct Ownership",
								description:
									"Percentage of the total housing stock within the specified <parcl_id> that is owned by investors",
							},
						},
						type: "object",
						required: ["date", "count", "pct_ownership"],
						title: "InvestorHousingStockOwnershipSchema",
					},
					type: "array",
					title: "Items",
				},
				total: { anyOf: [{ type: "integer", minimum: 0 }, { type: "null" }], title: "Total" },
				limit: { anyOf: [{ type: "integer", minimum: 1 }, { type: "null" }], title: "Limit" },
				offset: { anyOf: [{ type: "integer", minimum: 0 }, { type: "null" }], title: "Offset" },
				links: {
					properties: {
						first: {
							anyOf: [{ type: "string" }, { type: "null" }],
							title: "First",
							examples: ["/api/v1/users?limit=1&offset1"],
						},
						last: {
							anyOf: [{ type: "string" }, { type: "null" }],
							title: "Last",
							examples: ["/api/v1/users?limit=1&offset1"],
						},
						self: {
							anyOf: [{ type: "string" }, { type: "null" }],
							title: "Self",
							examples: ["/api/v1/users?limit=1&offset1"],
						},
						next: {
							anyOf: [{ type: "string" }, { type: "null" }],
							title: "Next",
							examples: ["/api/v1/users?limit=1&offset1"],
						},
						prev: {
							anyOf: [{ type: "string" }, { type: "null" }],
							title: "Prev",
							examples: ["/api/v1/users?limit=1&offset1"],
						},
					},
					type: "object",
					required: ["first", "last", "self", "next", "prev"],
					title: "Links",
				},
			},
			type: "object",
			required: ["items", "total", "limit", "offset", "links"],
			title: "LimitOffsetPage[InvestorHousingStockOwnershipSchema]",
			$schema: "https://json-schema.org/draft/2020-12/schema#",
		},
		"401": { $schema: "https://json-schema.org/draft/2020-12/schema#" },
		"403": { $schema: "https://json-schema.org/draft/2020-12/schema#" },
		"404": { $schema: "https://json-schema.org/draft/2020-12/schema#" },
		"422": { $schema: "https://json-schema.org/draft/2020-12/schema#" },
		"500": { $schema: "https://json-schema.org/draft/2020-12/schema#" },
	},
} as const;
const HousingStockV1MarketMetricsParclIdHousingStockGet = {
	metadata: {
		allOf: [
			{
				type: "object",
				properties: {
					parcl_id: {
						type: "integer",
						description:
							"A unique id for a given geographic market in the Parcl Labs API. Parcl_ids are unique and independent of each other, without any hierarchical structure. For example, the parcl_id for Brooklyn, NY bears no relationship to the parcl_id for the New York Metropolitan Statistical Area (MSA), even though Brooklyn is a part of the New York MSA.",
						examples: [2900187],
						title: "Parcl Id",
						$schema: "https://json-schema.org/draft/2020-12/schema#",
					},
				},
				required: ["parcl_id"],
			},
			{
				type: "object",
				properties: {
					start_date: {
						anyOf: [{ type: "string", format: "date" }, { type: "null" }],
						description:
							"Specifies the beginning of the query period, inclusive, in ISO 8601 format, i.e. YYYY-MM-DD. Defaults to null.",
						examples: ["2020-01-01"],
						title: "Start Date",
						$schema: "https://json-schema.org/draft/2020-12/schema#",
					},
					end_date: {
						anyOf: [{ type: "string", format: "date" }, { type: "null" }],
						description:
							"Specifies the end of the query period, inclusive, in ISO 8601 format, i.e. YYYY-MM-DD. Defaults to null.",
						examples: ["2022-01-01"],
						title: "End Date",
						$schema: "https://json-schema.org/draft/2020-12/schema#",
					},
					limit: {
						type: "integer",
						maximum: 1000,
						minimum: 1,
						description: "Page size limit",
						default: 12,
						title: "Limit",
						$schema: "https://json-schema.org/draft/2020-12/schema#",
					},
					offset: {
						type: "integer",
						minimum: 0,
						description: "Page offset",
						default: 0,
						title: "Offset",
						$schema: "https://json-schema.org/draft/2020-12/schema#",
					},
				},
				required: [],
			},
		],
	},
	response: {
		"200": {
			properties: {
				items: {
					items: {
						properties: {
							date: {
								type: "string",
								format: "date",
								title: "Date",
								description:
									"Date in format YYYY-MM-DD. The current year's output provides year-to-date data. For previous years, annual counts are linked to the first day of each respective year. For example, a response dated '2023-01-01' represents the housing stock as of the year 2023.",
							},
							single_family: {
								anyOf: [{ type: "integer" }, { type: "null" }],
								title: "Single Family",
								description: "Total number of single family homes within a specified <parcl_id>",
							},
							condo: {
								anyOf: [{ type: "integer" }, { type: "null" }],
								title: "Condo",
								description: "Total number of distinct condos within a specified <parcl_id>",
							},
							townhouse: {
								anyOf: [{ type: "integer" }, { type: "null" }],
								title: "Townhouse",
								description: "Total number of distinct townhouses within a specified <parcl_id>",
							},
							other: {
								anyOf: [{ type: "integer" }, { type: "null" }],
								title: "Other",
								description:
									"Total number of units categorized as 'other' within a specified <parcl_id>. Examples of ‘other’ units include co-ops and vacant land",
							},
							all_properties: {
								type: "integer",
								title: "All Properties",
								description:
									"Total number of single family homes, condos, other, and townhouses within a specified <parcl_id>",
							},
						},
						type: "object",
						required: ["date", "single_family", "condo", "townhouse", "other", "all_properties"],
						title: "MarketMetricsHousingStockMonthlySchema",
					},
					type: "array",
					title: "Items",
				},
				total: { anyOf: [{ type: "integer", minimum: 0 }, { type: "null" }], title: "Total" },
				limit: { anyOf: [{ type: "integer", minimum: 1 }, { type: "null" }], title: "Limit" },
				offset: { anyOf: [{ type: "integer", minimum: 0 }, { type: "null" }], title: "Offset" },
				links: {
					properties: {
						first: {
							anyOf: [{ type: "string" }, { type: "null" }],
							title: "First",
							examples: ["/api/v1/users?limit=1&offset1"],
						},
						last: {
							anyOf: [{ type: "string" }, { type: "null" }],
							title: "Last",
							examples: ["/api/v1/users?limit=1&offset1"],
						},
						self: {
							anyOf: [{ type: "string" }, { type: "null" }],
							title: "Self",
							examples: ["/api/v1/users?limit=1&offset1"],
						},
						next: {
							anyOf: [{ type: "string" }, { type: "null" }],
							title: "Next",
							examples: ["/api/v1/users?limit=1&offset1"],
						},
						prev: {
							anyOf: [{ type: "string" }, { type: "null" }],
							title: "Prev",
							examples: ["/api/v1/users?limit=1&offset1"],
						},
					},
					type: "object",
					required: ["first", "last", "self", "next", "prev"],
					title: "Links",
				},
			},
			type: "object",
			required: ["items", "total", "limit", "offset", "links"],
			title: "LimitOffsetPage[MarketMetricsHousingStockMonthlySchema]",
			$schema: "https://json-schema.org/draft/2020-12/schema#",
		},
		"401": { $schema: "https://json-schema.org/draft/2020-12/schema#" },
		"403": { $schema: "https://json-schema.org/draft/2020-12/schema#" },
		"404": { $schema: "https://json-schema.org/draft/2020-12/schema#" },
		"422": { $schema: "https://json-schema.org/draft/2020-12/schema#" },
		"500": { $schema: "https://json-schema.org/draft/2020-12/schema#" },
	},
} as const;
const NewListingsForRentRollingCountsV1RentalMarketMetricsParclIdNewListingsForRentRollingCountsGet = {
	metadata: {
		allOf: [
			{
				type: "object",
				properties: {
					parcl_id: {
						type: "integer",
						description:
							"A unique id for a given geographic market in the Parcl Labs API. Parcl_ids are unique and independent of each other, without any hierarchical structure. For example, the parcl_id for Brooklyn, NY bears no relationship to the parcl_id for the New York Metropolitan Statistical Area (MSA), even though Brooklyn is a part of the New York MSA.",
						examples: [2900187],
						title: "Parcl Id",
						$schema: "https://json-schema.org/draft/2020-12/schema#",
					},
				},
				required: ["parcl_id"],
			},
			{
				type: "object",
				properties: {
					property_type: {
						description:
							"The type of property the data is associated with. Allows for filtering based on property type.",
						examples: ["SINGLE_FAMILY", "CONDO", "TOWNHOUSE"],
						default: "ALL_PROPERTIES",
						title: "Property Type",
						type: "string",
						enum: ["SINGLE_FAMILY", "CONDO", "TOWNHOUSE", "ALL_PROPERTIES"],
						$schema: "https://json-schema.org/draft/2020-12/schema#",
					},
					start_date: {
						anyOf: [{ type: "string", format: "date" }, { type: "null" }],
						description:
							"Specifies the beginning of the query period, inclusive, in ISO 8601 format, i.e. YYYY-MM-DD. Defaults to null.",
						examples: ["2020-01-01"],
						title: "Start Date",
						$schema: "https://json-schema.org/draft/2020-12/schema#",
					},
					end_date: {
						anyOf: [{ type: "string", format: "date" }, { type: "null" }],
						description:
							"Specifies the end of the query period, inclusive, in ISO 8601 format, i.e. YYYY-MM-DD. Defaults to null.",
						examples: ["2022-01-01"],
						title: "End Date",
						$schema: "https://json-schema.org/draft/2020-12/schema#",
					},
					limit: {
						type: "integer",
						maximum: 1000,
						minimum: 1,
						description: "Page size limit",
						default: 12,
						title: "Limit",
						$schema: "https://json-schema.org/draft/2020-12/schema#",
					},
					offset: {
						type: "integer",
						minimum: 0,
						description: "Page offset",
						default: 0,
						title: "Offset",
						$schema: "https://json-schema.org/draft/2020-12/schema#",
					},
				},
				required: [],
			},
		],
	},
	response: {
		"200": {
			properties: {
				items: {
					items: {
						properties: {
							date: {
								type: "string",
								format: "date",
								title: "Date",
								description:
									"Date in YYYY-MM-DD format. This field represents the index date, which is the Monday following a complete data capture week that runs from Monday to Sunday. The index date serves as the anchor for aggregating and reporting the data collected during the preceding week (7 day) and also sets the reference point for the rolling aggregation periods of 30, 60, and 90 days ending on this date. For example, if data is captured from 2024-01-01 (Monday) to 2024-01-07 (Sunday), the index date will be 2024-01-08, the Monday immediately following the capture period . Data becomes available for access on the Thursday following the index date. If no data is returned for a specified index date, it signifies that no relevant events were recorded within the specified aggregation periods",
							},
							rolling_7_day: {
								anyOf: [{ type: "integer" }, { type: "null" }],
								title: "Rolling 7 Day",
								description:
									"Aggregation period covers a 7 day period immediately preceding the index date. This period captures data from the previous Monday to Sunday. For example, if the index date is 2024-03-11 (a Monday), this aggregation period spans from 2024-03-04 to 2024-03-10. A NULL value indicates an absence of data during this period (equivalent to 0)",
							},
							rolling_30_day: {
								anyOf: [{ type: "integer" }, { type: "null" }],
								title: "Rolling 30 Day",
								description:
									"Aggregation period covers a 30 day period immediately preceding the index date. This period provides a rolling monthly view up to the Sunday before the index date. For example, with an index date of 2024-03-11, this aggregation period includes data from 2024-02-09 to 2024-03-10. A NULL value signifies no observed data within this timeframe (equivalent to 0)",
							},
							rolling_60_day: {
								anyOf: [{ type: "integer" }, { type: "null" }],
								title: "Rolling 60 Day",
								description:
									"Aggregation period covers a 60 day period immediately preceding the index date. This period offers a two-month view up to the Sunday before the index date. For example, with an index date of 2024-03-11, this aggregation period includes data from 2024-01-11 to 2024-03-10. A NULL value signifies no observed data within this timeframe (equivalent to 0)",
							},
							rolling_90_day: {
								anyOf: [{ type: "integer" }, { type: "null" }],
								title: "Rolling 90 Day",
								description:
									"Aggregation period covers a 90 day period immediately preceding the index date. This period provides a quarterly view up to the Sunday before the index date. For example, with an index date of 2024-03-11, this aggregation period includes data from 2023-12-12 to 2024-03-10. A NULL value signifies no observed data within this timeframe (equivalent to 0)",
							},
						},
						type: "object",
						required: ["date", "rolling_7_day", "rolling_30_day", "rolling_60_day", "rolling_90_day"],
						title: "RentalWeeklyNewListingsRollingCountsSchema",
					},
					type: "array",
					title: "Items",
				},
				total: { anyOf: [{ type: "integer", minimum: 0 }, { type: "null" }], title: "Total" },
				limit: { anyOf: [{ type: "integer", minimum: 1 }, { type: "null" }], title: "Limit" },
				offset: { anyOf: [{ type: "integer", minimum: 0 }, { type: "null" }], title: "Offset" },
				links: {
					properties: {
						first: {
							anyOf: [{ type: "string" }, { type: "null" }],
							title: "First",
							examples: ["/api/v1/users?limit=1&offset1"],
						},
						last: {
							anyOf: [{ type: "string" }, { type: "null" }],
							title: "Last",
							examples: ["/api/v1/users?limit=1&offset1"],
						},
						self: {
							anyOf: [{ type: "string" }, { type: "null" }],
							title: "Self",
							examples: ["/api/v1/users?limit=1&offset1"],
						},
						next: {
							anyOf: [{ type: "string" }, { type: "null" }],
							title: "Next",
							examples: ["/api/v1/users?limit=1&offset1"],
						},
						prev: {
							anyOf: [{ type: "string" }, { type: "null" }],
							title: "Prev",
							examples: ["/api/v1/users?limit=1&offset1"],
						},
					},
					type: "object",
					required: ["first", "last", "self", "next", "prev"],
					title: "Links",
				},
			},
			type: "object",
			required: ["items", "total", "limit", "offset", "links"],
			title: "LimitOffsetPage[RentalWeeklyNewListingsRollingCountsSchema]",
			$schema: "https://json-schema.org/draft/2020-12/schema#",
		},
		"401": { $schema: "https://json-schema.org/draft/2020-12/schema#" },
		"403": { $schema: "https://json-schema.org/draft/2020-12/schema#" },
		"404": { $schema: "https://json-schema.org/draft/2020-12/schema#" },
		"422": { $schema: "https://json-schema.org/draft/2020-12/schema#" },
		"500": { $schema: "https://json-schema.org/draft/2020-12/schema#" },
	},
} as const;
const NewListingsForSaleRollingCountsV1InvestorMetricsParclIdNewListingsForSaleRollingCountsGet = {
	metadata: {
		allOf: [
			{
				type: "object",
				properties: {
					parcl_id: {
						type: "integer",
						description:
							"A unique id for a given geographic market in the Parcl Labs API. Parcl_ids are unique and independent of each other, without any hierarchical structure. For example, the parcl_id for Brooklyn, NY bears no relationship to the parcl_id for the New York Metropolitan Statistical Area (MSA), even though Brooklyn is a part of the New York MSA.",
						examples: [2900187],
						title: "Parcl Id",
						$schema: "https://json-schema.org/draft/2020-12/schema#",
					},
				},
				required: ["parcl_id"],
			},
			{
				type: "object",
				properties: {
					property_type: {
						description:
							"The type of property the data is associated with. Allows for filtering based on property type.",
						examples: ["SINGLE_FAMILY", "CONDO", "TOWNHOUSE"],
						default: "ALL_PROPERTIES",
						title: "Property Type",
						type: "string",
						enum: ["SINGLE_FAMILY", "CONDO", "TOWNHOUSE", "ALL_PROPERTIES"],
						$schema: "https://json-schema.org/draft/2020-12/schema#",
					},
					start_date: {
						anyOf: [{ type: "string", format: "date" }, { type: "null" }],
						description:
							"Specifies the beginning of the query period, inclusive, in ISO 8601 format, i.e. YYYY-MM-DD. Defaults to null.",
						examples: ["2020-01-01"],
						title: "Start Date",
						$schema: "https://json-schema.org/draft/2020-12/schema#",
					},
					end_date: {
						anyOf: [{ type: "string", format: "date" }, { type: "null" }],
						description:
							"Specifies the end of the query period, inclusive, in ISO 8601 format, i.e. YYYY-MM-DD. Defaults to null.",
						examples: ["2022-01-01"],
						title: "End Date",
						$schema: "https://json-schema.org/draft/2020-12/schema#",
					},
					limit: {
						type: "integer",
						maximum: 1000,
						minimum: 1,
						description: "Page size limit",
						default: 12,
						title: "Limit",
						$schema: "https://json-schema.org/draft/2020-12/schema#",
					},
					offset: {
						type: "integer",
						minimum: 0,
						description: "Page offset",
						default: 0,
						title: "Offset",
						$schema: "https://json-schema.org/draft/2020-12/schema#",
					},
				},
				required: [],
			},
		],
	},
	response: {
		"200": {
			properties: {
				items: {
					items: {
						properties: {
							date: {
								type: "string",
								format: "date",
								title: "Date",
								description:
									"Date in YYYY-MM-DD format. This field represents the index date, which is the Monday following a complete data capture week that runs from Monday to Sunday. The index date serves as the anchor for aggregating and reporting the data collected during the preceding week (7 day) and also sets the reference point for the rolling aggregation periods of 30, 60, and 90 days ending on this date. For example, if data is captured from 2024-01-01 (Monday) to 2024-01-07 (Sunday), the index date will be 2024-01-08, the Monday immediately following the capture period . Data becomes available for access on the Thursday following the index date. If no data is returned for a specified index date, it signifies that no relevant events were recorded within the specified aggregation periods",
							},
							count: {
								description: "Count of unique investor-owned properties newly listed for sale",
								type: "object",
								required: ["rolling_7_day", "rolling_30_day", "rolling_60_day", "rolling_90_day"],
								title: "InvestorForSaleRollingCountsSchema",
								properties: {
									rolling_7_day: {
										anyOf: [{ type: "integer" }, { type: "null" }],
										title: "Rolling 7 Day",
										description:
											"Aggregation period covers a 7 day period immediately preceding the index date. This period captures data from the previous Monday to Sunday. For example, if the index date is 2024-03-11 (a Monday), this aggregation period spans from 2024-03-04 to 2024-03-10. A NULL value indicates an absence of data during this period (equivalent to 0)",
									},
									rolling_30_day: {
										anyOf: [{ type: "integer" }, { type: "null" }],
										title: "Rolling 30 Day",
										description:
											"Aggregation period covers a 30 day period immediately preceding the index date. This period provides a rolling monthly view up to the Sunday before the index date. For example, with an index date of 2024-03-11, this aggregation period includes data from 2024-02-09 to 2024-03-10. A NULL value signifies no observed data within this timeframe (equivalent to 0)",
									},
									rolling_60_day: {
										anyOf: [{ type: "integer" }, { type: "null" }],
										title: "Rolling 60 Day",
										description:
											"Aggregation period covers a 60 day period immediately preceding the index date. This period offers a two-month view up to the Sunday before the index date. For example, with an index date of 2024-03-11, this aggregation period includes data from 2024-01-11 to 2024-03-10. A NULL value signifies no observed data within this timeframe (equivalent to 0)",
									},
									rolling_90_day: {
										anyOf: [{ type: "integer" }, { type: "null" }],
										title: "Rolling 90 Day",
										description:
											"Aggregation period covers a 90 day period immediately preceding the index date. This period provides a quarterly view up to the Sunday before the index date. For example, with an index date of 2024-03-11, this aggregation period includes data from 2023-12-12 to 2024-03-10. A NULL value signifies no observed data within this timeframe (equivalent to 0)",
									},
								},
							},
							pct_for_sale_market: {
								description:
									"Percentage share of the total market for newly listed for sale properties that are owned by investors",
								type: "object",
								required: ["rolling_7_day", "rolling_30_day", "rolling_60_day", "rolling_90_day"],
								title: "InvestorForSaleRollingCountsPctForSaleSchema",
								properties: {
									rolling_7_day: {
										anyOf: [{ type: "number" }, { type: "null" }],
										title: "Rolling 7 Day",
										description:
											"Aggregation period covers a 7 day period immediately preceding the index date. This period captures data from the previous Monday to Sunday. For example, if the index date is 2024-03-11 (a Monday), this aggregation period spans from 2024-03-04 to 2024-03-10. A NULL value indicates an absence of data during this period (equivalent to 0)",
									},
									rolling_30_day: {
										anyOf: [{ type: "number" }, { type: "null" }],
										title: "Rolling 30 Day",
										description:
											"Aggregation period covers a 30 day period immediately preceding the index date. This period provides a rolling monthly view up to the Sunday before the index date. For example, with an index date of 2024-03-11, this aggregation period includes data from 2024-02-09 to 2024-03-10. A NULL value signifies no observed data within this timeframe (equivalent to 0)",
									},
									rolling_60_day: {
										anyOf: [{ type: "number" }, { type: "null" }],
										title: "Rolling 60 Day",
										description:
											"Aggregation period covers a 60 day period immediately preceding the index date. This period offers a two-month view up to the Sunday before the index date. For example, with an index date of 2024-03-11, this aggregation period includes data from 2024-01-11 to 2024-03-10. A NULL value signifies no observed data within this timeframe (equivalent to 0)",
									},
									rolling_90_day: {
										anyOf: [{ type: "number" }, { type: "null" }],
										title: "Rolling 90 Day",
										description:
											"Aggregation period covers a 90 day period immediately preceding the index date. This period provides a quarterly view up to the Sunday before the index date. For example, with an index date of 2024-03-11, this aggregation period includes data from 2023-12-12 to 2024-03-10. A NULL value signifies no observed data within this timeframe (equivalent to 0)",
									},
								},
							},
						},
						type: "object",
						required: ["date", "count", "pct_for_sale_market"],
						title: "InvestorNewListingsForSaleRollingCountsSchema",
					},
					type: "array",
					title: "Items",
				},
				total: { anyOf: [{ type: "integer", minimum: 0 }, { type: "null" }], title: "Total" },
				limit: { anyOf: [{ type: "integer", minimum: 1 }, { type: "null" }], title: "Limit" },
				offset: { anyOf: [{ type: "integer", minimum: 0 }, { type: "null" }], title: "Offset" },
				links: {
					properties: {
						first: {
							anyOf: [{ type: "string" }, { type: "null" }],
							title: "First",
							examples: ["/api/v1/users?limit=1&offset1"],
						},
						last: {
							anyOf: [{ type: "string" }, { type: "null" }],
							title: "Last",
							examples: ["/api/v1/users?limit=1&offset1"],
						},
						self: {
							anyOf: [{ type: "string" }, { type: "null" }],
							title: "Self",
							examples: ["/api/v1/users?limit=1&offset1"],
						},
						next: {
							anyOf: [{ type: "string" }, { type: "null" }],
							title: "Next",
							examples: ["/api/v1/users?limit=1&offset1"],
						},
						prev: {
							anyOf: [{ type: "string" }, { type: "null" }],
							title: "Prev",
							examples: ["/api/v1/users?limit=1&offset1"],
						},
					},
					type: "object",
					required: ["first", "last", "self", "next", "prev"],
					title: "Links",
				},
			},
			type: "object",
			required: ["items", "total", "limit", "offset", "links"],
			title: "LimitOffsetPage[InvestorNewListingsForSaleRollingCountsSchema]",
			$schema: "https://json-schema.org/draft/2020-12/schema#",
		},
		"401": { $schema: "https://json-schema.org/draft/2020-12/schema#" },
		"403": { $schema: "https://json-schema.org/draft/2020-12/schema#" },
		"404": { $schema: "https://json-schema.org/draft/2020-12/schema#" },
		"422": { $schema: "https://json-schema.org/draft/2020-12/schema#" },
		"500": { $schema: "https://json-schema.org/draft/2020-12/schema#" },
	},
} as const;
const NewListingsRollingCountsV1ForSaleMarketMetricsParclIdNewListingsRollingCountsGet = {
	metadata: {
		allOf: [
			{
				type: "object",
				properties: {
					parcl_id: {
						type: "integer",
						description:
							"A unique id for a given geographic market in the Parcl Labs API. Parcl_ids are unique and independent of each other, without any hierarchical structure. For example, the parcl_id for Brooklyn, NY bears no relationship to the parcl_id for the New York Metropolitan Statistical Area (MSA), even though Brooklyn is a part of the New York MSA.",
						examples: [2900187],
						title: "Parcl Id",
						$schema: "https://json-schema.org/draft/2020-12/schema#",
					},
				},
				required: ["parcl_id"],
			},
			{
				type: "object",
				properties: {
					property_type: {
						description:
							"The type of property the data is associated with. Allows for filtering based on property type.",
						examples: ["SINGLE_FAMILY", "CONDO", "TOWNHOUSE"],
						default: "ALL_PROPERTIES",
						title: "Property Type",
						type: "string",
						enum: ["SINGLE_FAMILY", "CONDO", "TOWNHOUSE", "ALL_PROPERTIES"],
						$schema: "https://json-schema.org/draft/2020-12/schema#",
					},
					start_date: {
						anyOf: [{ type: "string", format: "date" }, { type: "null" }],
						description:
							"Specifies the beginning of the query period, inclusive, in ISO 8601 format, i.e. YYYY-MM-DD. Defaults to null.",
						examples: ["2020-01-01"],
						title: "Start Date",
						$schema: "https://json-schema.org/draft/2020-12/schema#",
					},
					end_date: {
						anyOf: [{ type: "string", format: "date" }, { type: "null" }],
						description:
							"Specifies the end of the query period, inclusive, in ISO 8601 format, i.e. YYYY-MM-DD. Defaults to null.",
						examples: ["2022-01-01"],
						title: "End Date",
						$schema: "https://json-schema.org/draft/2020-12/schema#",
					},
					limit: {
						type: "integer",
						maximum: 1000,
						minimum: 1,
						description: "Page size limit",
						default: 12,
						title: "Limit",
						$schema: "https://json-schema.org/draft/2020-12/schema#",
					},
					offset: {
						type: "integer",
						minimum: 0,
						description: "Page offset",
						default: 0,
						title: "Offset",
						$schema: "https://json-schema.org/draft/2020-12/schema#",
					},
				},
				required: [],
			},
		],
	},
	response: {
		"200": {
			properties: {
				items: {
					items: {
						properties: {
							date: {
								type: "string",
								format: "date",
								title: "Date",
								description:
									"Date in YYYY-MM-DD format. This field represents the index date, which is the Monday following a complete data capture week that runs from Monday to Sunday. The index date serves as the anchor for aggregating and reporting the data collected during the preceding week (7 day) and also sets the reference point for the rolling aggregation periods of 30, 60, and 90 days ending on this date. For example, if data is captured from 2024-01-01 (Monday) to 2024-01-07 (Sunday), the index date will be 2024-01-08, the Monday immediately following the capture period . Data becomes available for access on the Thursday following the index date. If no data is returned for a specified index date, it signifies that no relevant events were recorded within the specified aggregation periods.",
							},
							rolling_7_day: {
								anyOf: [{ type: "integer" }, { type: "null" }],
								title: "Rolling 7 Day",
								description:
									"Aggregation period covers a 7 day period immediately preceding the index date. This period captures data from the previous Monday to Sunday. For example, if the index date is 2024-03-11 (a Monday), this aggregation period spans from 2024-03-04 to 2024-03-10. A NULL value indicates an absence of data during this period (equivalent to 0)",
							},
							rolling_30_day: {
								anyOf: [{ type: "integer" }, { type: "null" }],
								title: "Rolling 30 Day",
								description:
									"Aggregation period covers a 30 day period immediately preceding the index date. This period provides a rolling monthly view up to the Sunday before the index date. For example, with an index date of 2024-03-11, this aggregation period includes data from 2024-02-09 to 2024-03-10. A NULL value signifies no observed data within this timeframe (equivalent to 0)",
							},
							rolling_60_day: {
								anyOf: [{ type: "integer" }, { type: "null" }],
								title: "Rolling 60 Day",
								description:
									"Aggregation period covers a 60 day period immediately preceding the index date. This period offers a two-month view up to the Sunday before the index date. For example, with an index date of 2024-03-11, this aggregation period includes data from 2024-01-11 to 2024-03-10. A NULL value signifies no observed data within this timeframe (equivalent to 0)",
							},
							rolling_90_day: {
								anyOf: [{ type: "integer" }, { type: "null" }],
								title: "Rolling 90 Day",
								description:
									"Aggregation period covers a 90 day period immediately preceding the index date. This period provides a quarterly view up to the Sunday before the index date. For example, with an index date of 2024-03-11, this aggregation period includes data from 2023-12-12 to 2024-03-10. A NULL value signifies no observed data within this timeframe (equivalent to 0)",
							},
						},
						type: "object",
						required: ["date", "rolling_7_day", "rolling_30_day", "rolling_60_day", "rolling_90_day"],
						title: "ForSaleWeeklyNewListingsRollingCountsSchema",
					},
					type: "array",
					title: "Items",
				},
				total: { anyOf: [{ type: "integer", minimum: 0 }, { type: "null" }], title: "Total" },
				limit: { anyOf: [{ type: "integer", minimum: 1 }, { type: "null" }], title: "Limit" },
				offset: { anyOf: [{ type: "integer", minimum: 0 }, { type: "null" }], title: "Offset" },
				links: {
					properties: {
						first: {
							anyOf: [{ type: "string" }, { type: "null" }],
							title: "First",
							examples: ["/api/v1/users?limit=1&offset1"],
						},
						last: {
							anyOf: [{ type: "string" }, { type: "null" }],
							title: "Last",
							examples: ["/api/v1/users?limit=1&offset1"],
						},
						self: {
							anyOf: [{ type: "string" }, { type: "null" }],
							title: "Self",
							examples: ["/api/v1/users?limit=1&offset1"],
						},
						next: {
							anyOf: [{ type: "string" }, { type: "null" }],
							title: "Next",
							examples: ["/api/v1/users?limit=1&offset1"],
						},
						prev: {
							anyOf: [{ type: "string" }, { type: "null" }],
							title: "Prev",
							examples: ["/api/v1/users?limit=1&offset1"],
						},
					},
					type: "object",
					required: ["first", "last", "self", "next", "prev"],
					title: "Links",
				},
			},
			type: "object",
			required: ["items", "total", "limit", "offset", "links"],
			title: "LimitOffsetPage[ForSaleWeeklyNewListingsRollingCountsSchema]",
			$schema: "https://json-schema.org/draft/2020-12/schema#",
		},
		"401": { $schema: "https://json-schema.org/draft/2020-12/schema#" },
		"403": { $schema: "https://json-schema.org/draft/2020-12/schema#" },
		"404": { $schema: "https://json-schema.org/draft/2020-12/schema#" },
		"422": { $schema: "https://json-schema.org/draft/2020-12/schema#" },
		"500": { $schema: "https://json-schema.org/draft/2020-12/schema#" },
	},
} as const;
const PurchaseToSaleRatioV1InvestorMetricsParclIdPurchaseToSaleRatioGet = {
	metadata: {
		allOf: [
			{
				type: "object",
				properties: {
					parcl_id: {
						type: "integer",
						description:
							"A unique id for a given geographic market in the Parcl Labs API. Parcl_ids are unique and independent of each other, without any hierarchical structure. For example, the parcl_id for Brooklyn, NY bears no relationship to the parcl_id for the New York Metropolitan Statistical Area (MSA), even though Brooklyn is a part of the New York MSA.",
						examples: [2900187],
						title: "Parcl Id",
						$schema: "https://json-schema.org/draft/2020-12/schema#",
					},
				},
				required: ["parcl_id"],
			},
			{
				type: "object",
				properties: {
					start_date: {
						anyOf: [{ type: "string", format: "date" }, { type: "null" }],
						description:
							"Specifies the beginning of the query period, inclusive, in ISO 8601 format, i.e. YYYY-MM-DD. Defaults to null.",
						examples: ["2020-01-01"],
						title: "Start Date",
						$schema: "https://json-schema.org/draft/2020-12/schema#",
					},
					end_date: {
						anyOf: [{ type: "string", format: "date" }, { type: "null" }],
						description:
							"Specifies the end of the query period, inclusive, in ISO 8601 format, i.e. YYYY-MM-DD. Defaults to null.",
						examples: ["2022-01-01"],
						title: "End Date",
						$schema: "https://json-schema.org/draft/2020-12/schema#",
					},
					limit: {
						type: "integer",
						maximum: 1000,
						minimum: 1,
						description: "Page size limit",
						default: 12,
						title: "Limit",
						$schema: "https://json-schema.org/draft/2020-12/schema#",
					},
					offset: {
						type: "integer",
						minimum: 0,
						description: "Page offset",
						default: 0,
						title: "Offset",
						$schema: "https://json-schema.org/draft/2020-12/schema#",
					},
				},
				required: [],
			},
		],
	},
	response: {
		"200": {
			properties: {
				items: {
					items: {
						properties: {
							date: {
								type: "string",
								format: "date",
								title: "Date",
								description:
									"Date in format YYYY-MM-DD. Data reflects the full month indicated by the date (YYYY-MM-DD), with updates on the 15th of the following month to include all events from the previous month. For example, data for January ('2024-01-01') is available on February 15th to include January's events. On the 15th of each month, data is revised to incorporate any new events recorded for the specified month after the initial update, ensuring the most accurate reflection of events",
							},
							purchase_to_sale_ratio: {
								anyOf: [{ type: "number" }, { type: "null" }],
								title: "Purchase To Sale Ratio",
								description:
									"Investor purchase to sale ratio within a given month, calculated by dividing the number of investor purchases (acquisitions) by the number of investor sales (dispositions).\n\n1.00: Equal numbers of purchases and sales, achieving a 1:1 balance\n\n&gt;1.00: More purchases than sales\n\n<1.00: More sales than purchases\n\n0: No purchases (numerator = 0)\n\nNULL: No sales (denominator = 0)",
							},
						},
						type: "object",
						required: ["date", "purchase_to_sale_ratio"],
						title: "InvestorPTSRatioMonthlySchema",
					},
					type: "array",
					title: "Items",
				},
				total: { anyOf: [{ type: "integer", minimum: 0 }, { type: "null" }], title: "Total" },
				limit: { anyOf: [{ type: "integer", minimum: 1 }, { type: "null" }], title: "Limit" },
				offset: { anyOf: [{ type: "integer", minimum: 0 }, { type: "null" }], title: "Offset" },
				links: {
					properties: {
						first: {
							anyOf: [{ type: "string" }, { type: "null" }],
							title: "First",
							examples: ["/api/v1/users?limit=1&offset1"],
						},
						last: {
							anyOf: [{ type: "string" }, { type: "null" }],
							title: "Last",
							examples: ["/api/v1/users?limit=1&offset1"],
						},
						self: {
							anyOf: [{ type: "string" }, { type: "null" }],
							title: "Self",
							examples: ["/api/v1/users?limit=1&offset1"],
						},
						next: {
							anyOf: [{ type: "string" }, { type: "null" }],
							title: "Next",
							examples: ["/api/v1/users?limit=1&offset1"],
						},
						prev: {
							anyOf: [{ type: "string" }, { type: "null" }],
							title: "Prev",
							examples: ["/api/v1/users?limit=1&offset1"],
						},
					},
					type: "object",
					required: ["first", "last", "self", "next", "prev"],
					title: "Links",
				},
			},
			type: "object",
			required: ["items", "total", "limit", "offset", "links"],
			title: "LimitOffsetPage[InvestorPTSRatioMonthlySchema]",
			$schema: "https://json-schema.org/draft/2020-12/schema#",
		},
		"401": { $schema: "https://json-schema.org/draft/2020-12/schema#" },
		"403": { $schema: "https://json-schema.org/draft/2020-12/schema#" },
		"404": { $schema: "https://json-schema.org/draft/2020-12/schema#" },
		"422": { $schema: "https://json-schema.org/draft/2020-12/schema#" },
		"500": { $schema: "https://json-schema.org/draft/2020-12/schema#" },
	},
} as const;
const RentalUnitsConcentrationV1RentalMarketMetricsParclIdRentalUnitsConcentrationGet = {
	metadata: {
		allOf: [
			{
				type: "object",
				properties: {
					parcl_id: {
						type: "integer",
						description:
							"A unique id for a given geographic market in the Parcl Labs API. Parcl_ids are unique and independent of each other, without any hierarchical structure. For example, the parcl_id for Brooklyn, NY bears no relationship to the parcl_id for the New York Metropolitan Statistical Area (MSA), even though Brooklyn is a part of the New York MSA.",
						examples: [2900187],
						title: "Parcl Id",
						$schema: "https://json-schema.org/draft/2020-12/schema#",
					},
				},
				required: ["parcl_id"],
			},
			{
				type: "object",
				properties: {
					property_type: {
						description:
							"The type of property the data is associated with. Allows for filtering based on property type.",
						examples: ["SINGLE_FAMILY", "CONDO", "TOWNHOUSE"],
						default: "ALL_PROPERTIES",
						title: "Property Type",
						type: "string",
						enum: ["SINGLE_FAMILY", "CONDO", "TOWNHOUSE", "ALL_PROPERTIES"],
						$schema: "https://json-schema.org/draft/2020-12/schema#",
					},
					start_date: {
						anyOf: [{ type: "string", format: "date" }, { type: "null" }],
						description:
							"Specifies the beginning of the query period, inclusive, in ISO 8601 format, i.e. YYYY-MM-DD. Defaults to null.",
						examples: ["2020-01-01"],
						title: "Start Date",
						$schema: "https://json-schema.org/draft/2020-12/schema#",
					},
					end_date: {
						anyOf: [{ type: "string", format: "date" }, { type: "null" }],
						description:
							"Specifies the end of the query period, inclusive, in ISO 8601 format, i.e. YYYY-MM-DD. Defaults to null.",
						examples: ["2022-01-01"],
						title: "End Date",
						$schema: "https://json-schema.org/draft/2020-12/schema#",
					},
					limit: {
						type: "integer",
						maximum: 1000,
						minimum: 1,
						description: "Page size limit",
						default: 12,
						title: "Limit",
						$schema: "https://json-schema.org/draft/2020-12/schema#",
					},
					offset: {
						type: "integer",
						minimum: 0,
						description: "Page offset",
						default: 0,
						title: "Offset",
						$schema: "https://json-schema.org/draft/2020-12/schema#",
					},
				},
				required: [],
			},
		],
	},
	response: {
		"200": {
			properties: {
				items: {
					items: {
						properties: {
							date: {
								type: "string",
								format: "date",
								title: "Date",
								description:
									"Date in format YYYY-MM-DD. Data reflects the full month indicated by the date (YYYY-MM-DD), with updates on the 15th of the following month to include all events from the previous month. For example, data for January ('2024-01-01') is available on February 15th to include January's events. On the 15th of each month, data is revised to incorporate any new events recorded for the specified month after the initial update, ensuring the most accurate reflection of events",
							},
							rental_units: {
								type: "integer",
								title: "Rental Units",
								description:
									"Total number of units considered a rental, inferred from ownership and rental market activity, within a specified <parcl_id>",
							},
							total_units: {
								type: "integer",
								title: "Total Units",
								description:
									"Total number of single_family, townhouse, condo, and other non-land units within a specified <parcl_id>",
							},
							pct_rental_concentration: {
								type: "number",
								title: "Pct Rental Concentration",
								description:
									"Percentage of total housing units that are considered rental units within a given month, calculated by dividing the number of rental_units by the total_units, then multiplying by 100 to convert this number into a percentage. This metric estimates the rental concentration within a specified <parcl_id> and may potentially overestimate the actual figure",
							},
						},
						type: "object",
						required: ["date", "rental_units", "total_units", "pct_rental_concentration"],
						title: "RentalConcentrationMonthlySchema",
					},
					type: "array",
					title: "Items",
				},
				total: { anyOf: [{ type: "integer", minimum: 0 }, { type: "null" }], title: "Total" },
				limit: { anyOf: [{ type: "integer", minimum: 1 }, { type: "null" }], title: "Limit" },
				offset: { anyOf: [{ type: "integer", minimum: 0 }, { type: "null" }], title: "Offset" },
				links: {
					properties: {
						first: {
							anyOf: [{ type: "string" }, { type: "null" }],
							title: "First",
							examples: ["/api/v1/users?limit=1&offset1"],
						},
						last: {
							anyOf: [{ type: "string" }, { type: "null" }],
							title: "Last",
							examples: ["/api/v1/users?limit=1&offset1"],
						},
						self: {
							anyOf: [{ type: "string" }, { type: "null" }],
							title: "Self",
							examples: ["/api/v1/users?limit=1&offset1"],
						},
						next: {
							anyOf: [{ type: "string" }, { type: "null" }],
							title: "Next",
							examples: ["/api/v1/users?limit=1&offset1"],
						},
						prev: {
							anyOf: [{ type: "string" }, { type: "null" }],
							title: "Prev",
							examples: ["/api/v1/users?limit=1&offset1"],
						},
					},
					type: "object",
					required: ["first", "last", "self", "next", "prev"],
					title: "Links",
				},
			},
			type: "object",
			required: ["items", "total", "limit", "offset", "links"],
			title: "LimitOffsetPage[RentalConcentrationMonthlySchema]",
			$schema: "https://json-schema.org/draft/2020-12/schema#",
		},
		"401": { $schema: "https://json-schema.org/draft/2020-12/schema#" },
		"403": { $schema: "https://json-schema.org/draft/2020-12/schema#" },
		"404": { $schema: "https://json-schema.org/draft/2020-12/schema#" },
		"422": { $schema: "https://json-schema.org/draft/2020-12/schema#" },
		"500": { $schema: "https://json-schema.org/draft/2020-12/schema#" },
	},
} as const;
const SearchMarketsV1SearchMarketsGet = {
	metadata: {
		allOf: [
			{
				type: "object",
				properties: {
					query: {
						anyOf: [
							{ type: "string", minLength: 3, maxLength: 57, pattern: "^[a-zA-Z0-9\\s\\-\\.\\,]{3,57}$" },
							{ type: "null" },
						],
						description:
							"User's search criteria, used to filter <parcl_id>s where the market name meets the specified search criteria",
						examples: ["New York"],
						title: "Query",
						$schema: "https://json-schema.org/draft/2020-12/schema#",
					},
					location_type: {
						description:
							"Specifies the type of geographic boundary used to filter search results. This field allows users to narrow down search results to specific geographic levels",
						examples: ["COUNTY", "CITY", "ZIP5"],
						default: "ALL",
						title: "Location Type",
						type: "string",
						enum: ["COUNTY", "CITY", "ZIP5", "CDP", "VILLAGE", "TOWN", "CBSA", "ALL"],
						$schema: "https://json-schema.org/draft/2020-12/schema#",
					},
					region: {
						description:
							"Specifies the region of the United States used to filter search results. This field is designed to help users focus their search within specific large geographic areas, aligning with common federal statistical divisions",
						examples: ["EAST_NORTH_CENTRAL", "EAST_SOUTH_CENTRAL", "MIDDLE_ATLANTIC"],
						default: "ALL",
						title: "Region",
						type: "string",
						enum: [
							"EAST_NORTH_CENTRAL",
							"EAST_SOUTH_CENTRAL",
							"MIDDLE_ATLANTIC",
							"MOUNTAIN",
							"NEW_ENGLAND",
							"PACIFIC",
							"SOUTH_ATLANTIC",
							"WEST_NORTH_CENTRAL",
							"WEST_SOUTH_CENTRAL",
							"ALL",
						],
						$schema: "https://json-schema.org/draft/2020-12/schema#",
					},
					state_abbreviation: {
						description:
							"Specifies the state within the United States used to filter search results. This field is designed to help users focus their search within specific states, using standard state abbreviations",
						examples: ["AK", "AL", "AR"],
						default: "ALL",
						title: "State Abbreviation",
						type: "string",
						enum: [
							"AK",
							"AL",
							"AR",
							"AZ",
							"CA",
							"CO",
							"CT",
							"DC",
							"DE",
							"FL",
							"GA",
							"HI",
							"IA",
							"ID",
							"IL",
							"IN",
							"KS",
							"KY",
							"LA",
							"MA",
							"MD",
							"ME",
							"MI",
							"MN",
							"MO",
							"MS",
							"MT",
							"NC",
							"ND",
							"NE",
							"NH",
							"NJ",
							"NM",
							"NV",
							"NY",
							"OH",
							"OK",
							"OR",
							"PA",
							"PR",
							"RI",
							"SC",
							"SD",
							"TN",
							"TX",
							"UT",
							"VA",
							"VI",
							"VT",
							"WA",
							"WI",
							"WV",
							"WY",
							"ALL",
						],
						$schema: "https://json-schema.org/draft/2020-12/schema#",
					},
					state_fips_code: {
						description:
							"Specifies the state within the United States used to filter search results, using the Federal Information Processing Standards (FIPS) code for geographic identification",
						examples: ["FIPS01", "FIPS02", "FIPS04"],
						default: "ALL",
						title: "State Fips Code",
						type: "string",
						enum: [
							"01",
							"02",
							"04",
							"05",
							"06",
							"08",
							"09",
							"10",
							"11",
							"12",
							"13",
							"15",
							"16",
							"17",
							"18",
							"19",
							"20",
							"21",
							"22",
							"23",
							"24",
							"25",
							"26",
							"27",
							"28",
							"29",
							"30",
							"31",
							"32",
							"33",
							"34",
							"35",
							"36",
							"37",
							"38",
							"39",
							"40",
							"41",
							"42",
							"44",
							"45",
							"46",
							"47",
							"48",
							"49",
							"50",
							"51",
							"53",
							"54",
							"55",
							"56",
							"60",
							"66",
							"69",
							"72",
							"78",
							"ALL",
						],
						$schema: "https://json-schema.org/draft/2020-12/schema#",
					},
					parcl_id: {
						anyOf: [{ type: "integer" }, { type: "null" }],
						description:
							"A unique id for a given geographic market in the Parcl Labs API. Parcl_ids are unique and independent of each other, without any hierarchical structure. For example, the parcl_id for Brooklyn, NY bears no relationship to the parcl_id for the New York Metropolitan Statistical Area (MSA), even though Brooklyn is a part of the New York MSA",
						min: 0,
						max: 6000000,
						title: "Parcl Id",
						$schema: "https://json-schema.org/draft/2020-12/schema#",
					},
					geoid: {
						anyOf: [{ type: "string", minLength: 5, maxLength: 7, pattern: "^[0-9]{5,7}$" }, { type: "null" }],
						description:
							"Specifies the Geographic Identifier (GEOID) used to filter search results. GEOIDs are unique codes assigned to various geographic entities by the U.S. Census Bureau. The Parcl Labs API currently supports GEOIDs for Census zip codes, counties, places, and metros, which range from 5-7 digits in length. For more information, please visit: <https://www.census.gov/programs-surveys/geography/guidance/geo-identifiers.html>",
						title: "Geoid",
						$schema: "https://json-schema.org/draft/2020-12/schema#",
					},
					sort_by: {
						description:
							"Specifies the sorting order for <parcl_id> results. Allows users to sort markets by population size, median income, and other market types",
						examples: ["TOTAL_POPULATION", "MEDIAN_INCOME", "CASE_SHILLER_20_MARKET"],
						default: "TOTAL_POPULATION",
						title: "Sort By",
						type: "string",
						enum: [
							"TOTAL_POPULATION",
							"MEDIAN_INCOME",
							"CASE_SHILLER_20_MARKET",
							"CASE_SHILLER_10_MARKET",
							"PRICEFEED_MARKET",
							"PARCL_EXCHANGE_MARKET",
						],
						$schema: "https://json-schema.org/draft/2020-12/schema#",
					},
					sort_order: {
						description:
							"Specifies the direction of the sorting for <parcl_id> results. For example, use sort_order desc with population_size to list more populous markets first.",
						examples: ["ASC", "DESC"],
						default: "DESC",
						title: "Sort Order",
						type: "string",
						enum: ["ASC", "DESC"],
						$schema: "https://json-schema.org/draft/2020-12/schema#",
					},
					limit: {
						type: "integer",
						maximum: 1000,
						minimum: 1,
						description: "Page size limit",
						default: 12,
						title: "Limit",
						$schema: "https://json-schema.org/draft/2020-12/schema#",
					},
					offset: {
						type: "integer",
						minimum: 0,
						description: "Page offset",
						default: 0,
						title: "Offset",
						$schema: "https://json-schema.org/draft/2020-12/schema#",
					},
				},
				required: [],
			},
		],
	},
	response: {
		"200": {
			properties: {
				items: {
					items: {
						properties: {
							parcl_id: {
								type: "integer",
								title: "Parcl Id",
								description:
									"A unique id for a given geographic market in the Parcl Labs API. Parcl_ids are unique and independent of each other, without any hierarchical structure. For example, the parcl_id for Brooklyn, NY bears no relationship to the parcl_id for the New York Metropolitan Statistical Area (MSA), even though Brooklyn is a part of the New York MSA",
							},
							country: {
								type: "string",
								title: "Country",
								description: "The country associated with the given <parcl_id>",
							},
							geoid: {
								anyOf: [{ type: "string" }, { type: "null" }],
								title: "Geoid",
								description:
									"Specifies the Geographic Identifier (GEOID) used to filter search results. GEOIDs are unique codes assigned to various geographic entities by the U.S. Census Bureau, encompassing a wide range of geographic levels from states to census blocks",
							},
							state_fips_code: {
								anyOf: [{ type: "string" }, { type: "null" }],
								title: "State Fips Code",
								description:
									"Specifies the state within the United States used to filter search results, using the Federal Information Processing Standards (FIPS) code for geographic identification",
							},
							name: {
								type: "string",
								title: "Name",
								description: "The official name of the market associated with the given <parcl_id>",
							},
							state_abbreviation: {
								anyOf: [{ type: "string" }, { type: "null" }],
								title: "State Abbreviation",
								description:
									"Specifies the state within the United States used to filter search results. This field is designed to help users focus their search within specific states, using standard state abbreviations",
							},
							region: {
								anyOf: [{ type: "string" }, { type: "null" }],
								title: "Region",
								description:
									"Specifies the region of the United States used to filter search results. This field is designed to help users focus their search within specific large geographic areas, aligning with common federal statistical divisions",
							},
							location_type: {
								type: "string",
								title: "Location Type",
								description:
									"Specifies the type of geographic boundary used to filter search results. This field allows users to narrow down search results to specific geographic levels",
							},
							total_population: {
								anyOf: [{ type: "integer" }, { type: "null" }],
								title: "Total Population",
								description:
									"The total number of individuals residing within the geographic area identified by the parcl_id. This value is an integer that reflects the latest population count available from relevant census data",
							},
							median_income: {
								anyOf: [{ type: "integer" }, { type: "null" }],
								title: "Median Income",
								description:
									"The median income level of households within the geographic area identified by the parcl_id. This value is an integer representing the latest median household income available from relevant census data",
							},
							parcl_exchange_market: {
								type: "integer",
								title: "Parcl Exchange Market",
								description:
									"Specifies whether the geographic area identified by the parcl_id is available as a tradable real estate market on the Parcl Protocol trading platform. It is a boolean value: 1 indicates that the market is active for trading, while 0 indicates it is not",
							},
							pricefeed_market: {
								type: "integer",
								title: "Pricefeed Market",
								description:
									"Specifies whether a Parcl Labs price feed is available for the geographic area identified by the <parcl_id>. It is a boolean value: 1 indicates that a price feed is active for that market, while 0 indicates that it is not",
							},
							case_shiller_10_market: {
								type: "integer",
								title: "Case Shiller 10 Market",
								description:
									"Specifies whether the geographic area identified by the parcl_id is included in the Case-Shiller 10 index, which tracks the performance of residential real estate in 10 major metropolitan areas in the United States. It is a boolean value: 1 indicates inclusion in the index, while 0 indicates it is not included",
							},
							case_shiller_20_market: {
								type: "integer",
								title: "Case Shiller 20 Market",
								description:
									"Specifies whether the geographic area identified by the parcl_id is included in the Case-Shiller 20 index, which tracks the performance of residential real estate in 20 major metropolitan areas in the United States. It is a boolean value: 1 indicates inclusion in the index, while 0 indicates it is not included",
							},
						},
						type: "object",
						required: [
							"parcl_id",
							"country",
							"geoid",
							"name",
							"location_type",
							"total_population",
							"median_income",
							"parcl_exchange_market",
							"pricefeed_market",
							"case_shiller_10_market",
							"case_shiller_20_market",
						],
						title: "SearchResponseSchema",
					},
					type: "array",
					title: "Items",
				},
				total: { anyOf: [{ type: "integer", minimum: 0 }, { type: "null" }], title: "Total" },
				limit: { anyOf: [{ type: "integer", minimum: 1 }, { type: "null" }], title: "Limit" },
				offset: { anyOf: [{ type: "integer", minimum: 0 }, { type: "null" }], title: "Offset" },
				links: {
					properties: {
						first: {
							anyOf: [{ type: "string" }, { type: "null" }],
							title: "First",
							examples: ["/api/v1/users?limit=1&offset1"],
						},
						last: {
							anyOf: [{ type: "string" }, { type: "null" }],
							title: "Last",
							examples: ["/api/v1/users?limit=1&offset1"],
						},
						self: {
							anyOf: [{ type: "string" }, { type: "null" }],
							title: "Self",
							examples: ["/api/v1/users?limit=1&offset1"],
						},
						next: {
							anyOf: [{ type: "string" }, { type: "null" }],
							title: "Next",
							examples: ["/api/v1/users?limit=1&offset1"],
						},
						prev: {
							anyOf: [{ type: "string" }, { type: "null" }],
							title: "Prev",
							examples: ["/api/v1/users?limit=1&offset1"],
						},
					},
					type: "object",
					required: ["first", "last", "self", "next", "prev"],
					title: "Links",
				},
			},
			type: "object",
			required: ["items", "total", "limit", "offset", "links"],
			title: "LimitOffsetPage[SearchResponseSchema]",
			$schema: "https://json-schema.org/draft/2020-12/schema#",
		},
		"401": { $schema: "https://json-schema.org/draft/2020-12/schema#" },
		"403": { $schema: "https://json-schema.org/draft/2020-12/schema#" },
		"404": { $schema: "https://json-schema.org/draft/2020-12/schema#" },
		"422": { $schema: "https://json-schema.org/draft/2020-12/schema#" },
		"500": { $schema: "https://json-schema.org/draft/2020-12/schema#" },
	},
} as const;
const SfHousingEventCountsV1PortfolioMetricsParclIdSfHousingEventCountsGet = {
	metadata: {
		allOf: [
			{
				type: "object",
				properties: {
					parcl_id: {
						type: "integer",
						description:
							"A unique id for a given geographic market in the Parcl Labs API. Parcl_ids are unique and independent of each other, without any hierarchical structure. For example, the parcl_id for Brooklyn, NY bears no relationship to the parcl_id for the New York Metropolitan Statistical Area (MSA), even though Brooklyn is a part of the New York MSA.",
						examples: [2900187],
						title: "Parcl Id",
						$schema: "https://json-schema.org/draft/2020-12/schema#",
					},
				},
				required: ["parcl_id"],
			},
			{
				type: "object",
				properties: {
					portfolio_size: {
						description:
							"The investor single family portfolio size the data is associated with. Filters the dataset to show data associated only with investors within specified portfolio size ranges. The data series for portfolio metrics begins on March 1, 2024 (2024-03-01). ",
						examples: ["PORTFOLIO_2_TO_9", "PORTFOLIO_10_TO_99", "PORTFOLIO_100_TO_999"],
						default: "ALL_PORTFOLIOS",
						title: "Portfolio Size",
						type: "string",
						enum: [
							"PORTFOLIO_2_TO_9",
							"PORTFOLIO_10_TO_99",
							"PORTFOLIO_100_TO_999",
							"PORTFOLIO_1000_PLUS",
							"ALL_PORTFOLIOS",
						],
						$schema: "https://json-schema.org/draft/2020-12/schema#",
					},
					start_date: {
						anyOf: [{ type: "string", format: "date" }, { type: "null" }],
						description:
							"Specifies the beginning of the query period, inclusive, in ISO 8601 format, i.e. YYYY-MM-DD. Defaults to null.",
						examples: ["2020-01-01"],
						title: "Start Date",
						$schema: "https://json-schema.org/draft/2020-12/schema#",
					},
					end_date: {
						anyOf: [{ type: "string", format: "date" }, { type: "null" }],
						description:
							"Specifies the end of the query period, inclusive, in ISO 8601 format, i.e. YYYY-MM-DD. Defaults to null.",
						examples: ["2022-01-01"],
						title: "End Date",
						$schema: "https://json-schema.org/draft/2020-12/schema#",
					},
					limit: {
						type: "integer",
						maximum: 1000,
						minimum: 1,
						description: "Page size limit",
						default: 12,
						title: "Limit",
						$schema: "https://json-schema.org/draft/2020-12/schema#",
					},
					offset: {
						type: "integer",
						minimum: 0,
						description: "Page offset",
						default: 0,
						title: "Offset",
						$schema: "https://json-schema.org/draft/2020-12/schema#",
					},
				},
				required: [],
			},
		],
	},
	response: {
		"200": {
			properties: {
				items: {
					items: {
						properties: {
							date: {
								type: "string",
								format: "date",
								title: "Date",
								description:
									"Date in format YYYY-MM-DD. Data reflects the full month indicated by the date (YYYY-MM-DD), with updates on the 15th of the following month to include all events from the previous month. For example, data for January ('2024-01-01') is available on February 15th to include January's events. On the 15th of each month, data is revised to incorporate any new events recorded for the specified month after the initial update, ensuring the most accurate reflection of events",
							},
							acquisitions: {
								type: "integer",
								title: "Acquisitions",
								description:
									"Total number of purchases of single family properties by investors, segmented by portfolio size, for the specified <parcl_id> within the given month",
							},
							dispositions: {
								type: "integer",
								title: "Dispositions",
								description:
									"Total number of sales of single family properties by investors, segmented by portfolio size, for the specified <parcl_id> within the given month",
							},
							new_listings_for_sale: {
								type: "integer",
								title: "New Listings For Sale",
								description:
									"Total number of investor-owned, newly listed for sale single family properties, segmented by portfolio size, for the specified <parcl_id> within the given month",
							},
							new_rental_listings: {
								type: "integer",
								title: "New Rental Listings",
								description:
									"Total number of investor-owned, newly listed for rent single family properties, segmented by portfolio size, for the specified <parcl_id> within the given month",
							},
						},
						type: "object",
						required: ["date", "acquisitions", "dispositions", "new_listings_for_sale", "new_rental_listings"],
						title: "PortfolioHousingEventCountsMonthlySchema",
					},
					type: "array",
					title: "Items",
				},
				total: { anyOf: [{ type: "integer", minimum: 0 }, { type: "null" }], title: "Total" },
				limit: { anyOf: [{ type: "integer", minimum: 1 }, { type: "null" }], title: "Limit" },
				offset: { anyOf: [{ type: "integer", minimum: 0 }, { type: "null" }], title: "Offset" },
				links: {
					properties: {
						first: {
							anyOf: [{ type: "string" }, { type: "null" }],
							title: "First",
							examples: ["/api/v1/users?limit=1&offset1"],
						},
						last: {
							anyOf: [{ type: "string" }, { type: "null" }],
							title: "Last",
							examples: ["/api/v1/users?limit=1&offset1"],
						},
						self: {
							anyOf: [{ type: "string" }, { type: "null" }],
							title: "Self",
							examples: ["/api/v1/users?limit=1&offset1"],
						},
						next: {
							anyOf: [{ type: "string" }, { type: "null" }],
							title: "Next",
							examples: ["/api/v1/users?limit=1&offset1"],
						},
						prev: {
							anyOf: [{ type: "string" }, { type: "null" }],
							title: "Prev",
							examples: ["/api/v1/users?limit=1&offset1"],
						},
					},
					type: "object",
					required: ["first", "last", "self", "next", "prev"],
					title: "Links",
				},
			},
			type: "object",
			required: ["items", "total", "limit", "offset", "links"],
			title: "LimitOffsetPage[PortfolioHousingEventCountsMonthlySchema]",
			$schema: "https://json-schema.org/draft/2020-12/schema#",
		},
		"401": { $schema: "https://json-schema.org/draft/2020-12/schema#" },
		"403": { $schema: "https://json-schema.org/draft/2020-12/schema#" },
		"404": { $schema: "https://json-schema.org/draft/2020-12/schema#" },
		"422": { $schema: "https://json-schema.org/draft/2020-12/schema#" },
		"500": { $schema: "https://json-schema.org/draft/2020-12/schema#" },
	},
} as const;
const SfHousingStockOwnershipV1PortfolioMetricsParclIdSfHousingStockOwnershipGet = {
	metadata: {
		allOf: [
			{
				type: "object",
				properties: {
					parcl_id: {
						type: "integer",
						description:
							"A unique id for a given geographic market in the Parcl Labs API. Parcl_ids are unique and independent of each other, without any hierarchical structure. For example, the parcl_id for Brooklyn, NY bears no relationship to the parcl_id for the New York Metropolitan Statistical Area (MSA), even though Brooklyn is a part of the New York MSA.",
						examples: [2900187],
						title: "Parcl Id",
						$schema: "https://json-schema.org/draft/2020-12/schema#",
					},
				},
				required: ["parcl_id"],
			},
			{
				type: "object",
				properties: {
					start_date: {
						anyOf: [{ type: "string", format: "date" }, { type: "null" }],
						description:
							"Specifies the beginning of the query period, inclusive, in ISO 8601 format, i.e. YYYY-MM-DD. Defaults to null.",
						examples: ["2020-01-01"],
						title: "Start Date",
						$schema: "https://json-schema.org/draft/2020-12/schema#",
					},
					end_date: {
						anyOf: [{ type: "string", format: "date" }, { type: "null" }],
						description:
							"Specifies the end of the query period, inclusive, in ISO 8601 format, i.e. YYYY-MM-DD. Defaults to null.",
						examples: ["2022-01-01"],
						title: "End Date",
						$schema: "https://json-schema.org/draft/2020-12/schema#",
					},
					limit: {
						type: "integer",
						maximum: 1000,
						minimum: 1,
						description: "Page size limit",
						default: 12,
						title: "Limit",
						$schema: "https://json-schema.org/draft/2020-12/schema#",
					},
					offset: {
						type: "integer",
						minimum: 0,
						description: "Page offset",
						default: 0,
						title: "Offset",
						$schema: "https://json-schema.org/draft/2020-12/schema#",
					},
				},
				required: [],
			},
		],
	},
	response: {
		"200": {
			properties: {
				items: {
					items: {
						properties: {
							date: {
								type: "string",
								format: "date",
								title: "Date",
								description:
									"Date in format YYYY-MM-DD. Data reflects the full month indicated by the date (YYYY-MM-DD), with updates on the 15th of the following month to include all events from the previous month. For example, data for January ('2024-01-01') is available on February 15th to include January's events. On the 15th of each month, data is revised to incorporate any new events recorded for the specified month after the initial update, ensuring the most accurate reflection of events",
							},
							count: {
								description:
									"Count of investor-owned single family properties within the specified <parcl_id>, segmented by portfolio size",
								type: "object",
								required: [
									"portfolio_2_to_9",
									"portfolio_10_to_99",
									"portfolio_100_to_999",
									"portfolio_1000_plus",
									"all_portfolios",
								],
								title: "PortfolioOwnershipCountSchema",
								properties: {
									portfolio_2_to_9: {
										anyOf: [{ type: "integer" }, { type: "null" }],
										title: "Portfolio 2 To 9",
										description:
											"Investors with a total of 2 to 9 units in their portfolio. This category represents individual or small scale investors",
									},
									portfolio_10_to_99: {
										anyOf: [{ type: "integer" }, { type: "null" }],
										title: "Portfolio 10 To 99",
										description: "Investors with a total of 10 to 99 units in their portfolio",
									},
									portfolio_100_to_999: {
										anyOf: [{ type: "integer" }, { type: "null" }],
										title: "Portfolio 100 To 999",
										description: "Investors with a total of 100 to 999 units in their portfolio",
									},
									portfolio_1000_plus: {
										anyOf: [{ type: "integer" }, { type: "null" }],
										title: "Portfolio 1000 Plus",
										description:
											"Investors with a total of 1000 units or more in their portfolio. This category represents large scale investors, such as institutional investment firms or national housing operators",
									},
									all_portfolios: {
										anyOf: [{ type: "integer" }, { type: "null" }],
										title: "All Portfolios",
										description:
											"Investors with any number of units in their portfolio. Represents an aggregate across all defined portfolio size segments",
									},
								},
							},
							pct_sf_housing_stock: {
								description:
									"Percentage of the single family housing stock within the specified <parcl_id> that is owned by investors, segmented by portfolio size",
								type: "object",
								required: [
									"portfolio_2_to_9",
									"portfolio_10_to_99",
									"portfolio_100_to_999",
									"portfolio_1000_plus",
									"all_portfolios",
								],
								title: "PortfolioOwnershipPctHousingStockSchema",
								properties: {
									portfolio_2_to_9: {
										anyOf: [{ type: "number" }, { type: "null" }],
										title: "Portfolio 2 To 9",
										description:
											"Investors with a total of 2 to 9 units in their portfolio. This category represents individual or small scale investors",
									},
									portfolio_10_to_99: {
										anyOf: [{ type: "number" }, { type: "null" }],
										title: "Portfolio 10 To 99",
										description: "Investors with a total of 10 to 99 units in their portfolio",
									},
									portfolio_100_to_999: {
										anyOf: [{ type: "number" }, { type: "null" }],
										title: "Portfolio 100 To 999",
										description: "Investors with a total of 100 to 999 units in their portfolio",
									},
									portfolio_1000_plus: {
										anyOf: [{ type: "number" }, { type: "null" }],
										title: "Portfolio 1000 Plus",
										description:
											"Investors with a total of 1000 units or more in their portfolio. This category represents large scale investors, such as institutional investment firms or national housing operators",
									},
									all_portfolios: {
										anyOf: [{ type: "number" }, { type: "null" }],
										title: "All Portfolios",
										description:
											"Investors with any number of units in their portfolio. Represents an aggregate across all defined portfolio size segments",
									},
								},
							},
						},
						type: "object",
						required: ["date", "count", "pct_sf_housing_stock"],
						title: "PortfolioOwnershipSchema",
					},
					type: "array",
					title: "Items",
				},
				total: { anyOf: [{ type: "integer", minimum: 0 }, { type: "null" }], title: "Total" },
				limit: { anyOf: [{ type: "integer", minimum: 1 }, { type: "null" }], title: "Limit" },
				offset: { anyOf: [{ type: "integer", minimum: 0 }, { type: "null" }], title: "Offset" },
				links: {
					properties: {
						first: {
							anyOf: [{ type: "string" }, { type: "null" }],
							title: "First",
							examples: ["/api/v1/users?limit=1&offset1"],
						},
						last: {
							anyOf: [{ type: "string" }, { type: "null" }],
							title: "Last",
							examples: ["/api/v1/users?limit=1&offset1"],
						},
						self: {
							anyOf: [{ type: "string" }, { type: "null" }],
							title: "Self",
							examples: ["/api/v1/users?limit=1&offset1"],
						},
						next: {
							anyOf: [{ type: "string" }, { type: "null" }],
							title: "Next",
							examples: ["/api/v1/users?limit=1&offset1"],
						},
						prev: {
							anyOf: [{ type: "string" }, { type: "null" }],
							title: "Prev",
							examples: ["/api/v1/users?limit=1&offset1"],
						},
					},
					type: "object",
					required: ["first", "last", "self", "next", "prev"],
					title: "Links",
				},
			},
			type: "object",
			required: ["items", "total", "limit", "offset", "links"],
			title: "LimitOffsetPage[PortfolioOwnershipSchema]",
			$schema: "https://json-schema.org/draft/2020-12/schema#",
		},
		"401": { $schema: "https://json-schema.org/draft/2020-12/schema#" },
		"403": { $schema: "https://json-schema.org/draft/2020-12/schema#" },
		"404": { $schema: "https://json-schema.org/draft/2020-12/schema#" },
		"422": { $schema: "https://json-schema.org/draft/2020-12/schema#" },
		"500": { $schema: "https://json-schema.org/draft/2020-12/schema#" },
	},
} as const;
const SfNewListingsForRentRollingCountsV1PortfolioMetricsParclIdSfNewListingsForRentRollingCountsGet = {
	metadata: {
		allOf: [
			{
				type: "object",
				properties: {
					parcl_id: {
						type: "integer",
						description:
							"A unique id for a given geographic market in the Parcl Labs API. Parcl_ids are unique and independent of each other, without any hierarchical structure. For example, the parcl_id for Brooklyn, NY bears no relationship to the parcl_id for the New York Metropolitan Statistical Area (MSA), even though Brooklyn is a part of the New York MSA.",
						examples: [2900187],
						title: "Parcl Id",
						$schema: "https://json-schema.org/draft/2020-12/schema#",
					},
				},
				required: ["parcl_id"],
			},
			{
				type: "object",
				properties: {
					portfolio_size: {
						description:
							"The investor single family portfolio size the data is associated with. Filters the dataset to show data associated only with investors within specified portfolio size ranges. The data series for portfolio metrics begins on March 1, 2024 (2024-03-01). ",
						examples: ["PORTFOLIO_2_TO_9", "PORTFOLIO_10_TO_99", "PORTFOLIO_100_TO_999"],
						default: "ALL_PORTFOLIOS",
						title: "Portfolio Size",
						type: "string",
						enum: [
							"PORTFOLIO_2_TO_9",
							"PORTFOLIO_10_TO_99",
							"PORTFOLIO_100_TO_999",
							"PORTFOLIO_1000_PLUS",
							"ALL_PORTFOLIOS",
						],
						$schema: "https://json-schema.org/draft/2020-12/schema#",
					},
					start_date: {
						anyOf: [{ type: "string", format: "date" }, { type: "null" }],
						description:
							"Specifies the beginning of the query period, inclusive, in ISO 8601 format, i.e. YYYY-MM-DD. Defaults to null.",
						examples: ["2020-01-01"],
						title: "Start Date",
						$schema: "https://json-schema.org/draft/2020-12/schema#",
					},
					end_date: {
						anyOf: [{ type: "string", format: "date" }, { type: "null" }],
						description:
							"Specifies the end of the query period, inclusive, in ISO 8601 format, i.e. YYYY-MM-DD. Defaults to null.",
						examples: ["2022-01-01"],
						title: "End Date",
						$schema: "https://json-schema.org/draft/2020-12/schema#",
					},
					limit: {
						type: "integer",
						maximum: 1000,
						minimum: 1,
						description: "Page size limit",
						default: 12,
						title: "Limit",
						$schema: "https://json-schema.org/draft/2020-12/schema#",
					},
					offset: {
						type: "integer",
						minimum: 0,
						description: "Page offset",
						default: 0,
						title: "Offset",
						$schema: "https://json-schema.org/draft/2020-12/schema#",
					},
				},
				required: [],
			},
		],
	},
	response: {
		"200": {
			properties: {
				items: {
					items: {
						properties: {
							date: {
								type: "string",
								format: "date",
								title: "Date",
								description:
									"Date in YYYY-MM-DD format. This field represents the index date, which is the Monday following a complete data capture week that runs from Monday to Sunday. The index date serves as the anchor for aggregating and reporting the data collected during the preceding week (7 day) and also sets the reference point for the rolling aggregation periods of 30, 60, and 90 days ending on this date. For example, if data is captured from 2024-01-01 (Monday) to 2024-01-07 (Sunday), the index date will be 2024-01-08, the Monday immediately following the capture period . Data becomes available for access on the Thursday following the index date. If no data is returned for a specified index date, it signifies that no relevant events were recorded within the specified aggregation periods",
							},
							count: {
								description:
									"Count of investor-owned single family properties newly listed for rent, segmented by portfolio size",
								type: "object",
								required: ["rolling_7_day", "rolling_30_day", "rolling_60_day", "rolling_90_day"],
								title: "PortfolioWeeklyNRFSCountsSchema",
								properties: {
									rolling_7_day: {
										anyOf: [{ type: "integer" }, { type: "null" }],
										title: "Rolling 7 Day",
										description:
											"Aggregation period covers a 7 day period immediately preceding the index date. This period captures data from the previous Monday to Sunday. For example, if the index date is 2024-03-11 (a Monday), this aggregation period spans from 2024-03-04 to 2024-03-10. A NULL value indicates an absence of data during this period (equivalent to 0)",
									},
									rolling_30_day: {
										anyOf: [{ type: "integer" }, { type: "null" }],
										title: "Rolling 30 Day",
										description:
											"Aggregation period covers a 30 day period immediately preceding the index date. This period provides a rolling monthly view up to the Sunday before the index date. For example, with an index date of 2024-03-11, this aggregation period includes data from 2024-02-09 to 2024-03-10. A NULL value signifies no observed data within this timeframe (equivalent to 0)",
									},
									rolling_60_day: {
										anyOf: [{ type: "integer" }, { type: "null" }],
										title: "Rolling 60 Day",
										description:
											"Aggregation period covers a 60 day period immediately preceding the index date. This period offers a two-month view up to the Sunday before the index date. For example, with an index date of 2024-03-11, this aggregation period includes data from 2024-01-11 to 2024-03-10. A NULL value signifies no observed data within this timeframe (equivalent to 0)",
									},
									rolling_90_day: {
										anyOf: [{ type: "integer" }, { type: "null" }],
										title: "Rolling 90 Day",
										description:
											"Aggregation period covers a 90 day period immediately preceding the index date. This period provides a quarterly view up to the Sunday before the index date. For example, with an index date of 2024-03-11, this aggregation period includes data from 2023-12-12 to 2024-03-10. A NULL value signifies no observed data within this timeframe (equivalent to 0)",
									},
								},
							},
							pct_sf_for_rent_market: {
								description:
									"Percentage share of the total market for newly listed for rent single family properties that are investor-owned, segmented by portfolio size",
								type: "object",
								required: ["rolling_7_day", "rolling_30_day", "rolling_60_day", "rolling_90_day"],
								title: "PortfolioWeeklyNRFSPctSchema",
								properties: {
									rolling_7_day: {
										anyOf: [{ type: "number" }, { type: "null" }],
										title: "Rolling 7 Day",
										description:
											"Aggregation period covers a 7 day period immediately preceding the index date. This period captures data from the previous Monday to Sunday. For example, if the index date is 2024-03-11 (a Monday), this aggregation period spans from 2024-03-04 to 2024-03-10. A NULL value indicates an absence of data during this period (equivalent to 0)",
									},
									rolling_30_day: {
										anyOf: [{ type: "number" }, { type: "null" }],
										title: "Rolling 30 Day",
										description:
											"Aggregation period covers a 30 day period immediately preceding the index date. This period provides a rolling monthly view up to the Sunday before the index date. For example, with an index date of 2024-03-11, this aggregation period includes data from 2024-02-09 to 2024-03-10. A NULL value signifies no observed data within this timeframe (equivalent to 0)",
									},
									rolling_60_day: {
										anyOf: [{ type: "number" }, { type: "null" }],
										title: "Rolling 60 Day",
										description:
											"Aggregation period covers a 60 day period immediately preceding the index date. This period offers a two-month view up to the Sunday before the index date. For example, with an index date of 2024-03-11, this aggregation period includes data from 2024-01-11 to 2024-03-10. A NULL value signifies no observed data within this timeframe (equivalent to 0)",
									},
									rolling_90_day: {
										anyOf: [{ type: "number" }, { type: "null" }],
										title: "Rolling 90 Day",
										description:
											"Aggregation period covers a 90 day period immediately preceding the index date. This period provides a quarterly view up to the Sunday before the index date. For example, with an index date of 2024-03-11, this aggregation period includes data from 2023-12-12 to 2024-03-10. A NULL value signifies no observed data within this timeframe (equivalent to 0)",
									},
								},
							},
						},
						type: "object",
						required: ["date", "count", "pct_sf_for_rent_market"],
						title: "PortfolioWeeklyNRFSSchema",
					},
					type: "array",
					title: "Items",
				},
				total: { anyOf: [{ type: "integer", minimum: 0 }, { type: "null" }], title: "Total" },
				limit: { anyOf: [{ type: "integer", minimum: 1 }, { type: "null" }], title: "Limit" },
				offset: { anyOf: [{ type: "integer", minimum: 0 }, { type: "null" }], title: "Offset" },
				links: {
					properties: {
						first: {
							anyOf: [{ type: "string" }, { type: "null" }],
							title: "First",
							examples: ["/api/v1/users?limit=1&offset1"],
						},
						last: {
							anyOf: [{ type: "string" }, { type: "null" }],
							title: "Last",
							examples: ["/api/v1/users?limit=1&offset1"],
						},
						self: {
							anyOf: [{ type: "string" }, { type: "null" }],
							title: "Self",
							examples: ["/api/v1/users?limit=1&offset1"],
						},
						next: {
							anyOf: [{ type: "string" }, { type: "null" }],
							title: "Next",
							examples: ["/api/v1/users?limit=1&offset1"],
						},
						prev: {
							anyOf: [{ type: "string" }, { type: "null" }],
							title: "Prev",
							examples: ["/api/v1/users?limit=1&offset1"],
						},
					},
					type: "object",
					required: ["first", "last", "self", "next", "prev"],
					title: "Links",
				},
			},
			type: "object",
			required: ["items", "total", "limit", "offset", "links"],
			title: "LimitOffsetPage[PortfolioWeeklyNRFSSchema]",
			$schema: "https://json-schema.org/draft/2020-12/schema#",
		},
		"401": { $schema: "https://json-schema.org/draft/2020-12/schema#" },
		"403": { $schema: "https://json-schema.org/draft/2020-12/schema#" },
		"404": { $schema: "https://json-schema.org/draft/2020-12/schema#" },
		"422": { $schema: "https://json-schema.org/draft/2020-12/schema#" },
		"500": { $schema: "https://json-schema.org/draft/2020-12/schema#" },
	},
} as const;
const SfNewListingsForSaleRollingCountsV1PortfolioMetricsParclIdSfNewListingsForSaleRollingCountsGet = {
	metadata: {
		allOf: [
			{
				type: "object",
				properties: {
					parcl_id: {
						type: "integer",
						description:
							"A unique id for a given geographic market in the Parcl Labs API. Parcl_ids are unique and independent of each other, without any hierarchical structure. For example, the parcl_id for Brooklyn, NY bears no relationship to the parcl_id for the New York Metropolitan Statistical Area (MSA), even though Brooklyn is a part of the New York MSA.",
						examples: [2900187],
						title: "Parcl Id",
						$schema: "https://json-schema.org/draft/2020-12/schema#",
					},
				},
				required: ["parcl_id"],
			},
			{
				type: "object",
				properties: {
					portfolio_size: {
						description:
							"The investor single family portfolio size the data is associated with. Filters the dataset to show data associated only with investors within specified portfolio size ranges. The data series for portfolio metrics begins on March 1, 2024 (2024-03-01). ",
						examples: ["PORTFOLIO_2_TO_9", "PORTFOLIO_10_TO_99", "PORTFOLIO_100_TO_999"],
						default: "ALL_PORTFOLIOS",
						title: "Portfolio Size",
						type: "string",
						enum: [
							"PORTFOLIO_2_TO_9",
							"PORTFOLIO_10_TO_99",
							"PORTFOLIO_100_TO_999",
							"PORTFOLIO_1000_PLUS",
							"ALL_PORTFOLIOS",
						],
						$schema: "https://json-schema.org/draft/2020-12/schema#",
					},
					start_date: {
						anyOf: [{ type: "string", format: "date" }, { type: "null" }],
						description:
							"Specifies the beginning of the query period, inclusive, in ISO 8601 format, i.e. YYYY-MM-DD. Defaults to null.",
						examples: ["2020-01-01"],
						title: "Start Date",
						$schema: "https://json-schema.org/draft/2020-12/schema#",
					},
					end_date: {
						anyOf: [{ type: "string", format: "date" }, { type: "null" }],
						description:
							"Specifies the end of the query period, inclusive, in ISO 8601 format, i.e. YYYY-MM-DD. Defaults to null.",
						examples: ["2022-01-01"],
						title: "End Date",
						$schema: "https://json-schema.org/draft/2020-12/schema#",
					},
					limit: {
						type: "integer",
						maximum: 1000,
						minimum: 1,
						description: "Page size limit",
						default: 12,
						title: "Limit",
						$schema: "https://json-schema.org/draft/2020-12/schema#",
					},
					offset: {
						type: "integer",
						minimum: 0,
						description: "Page offset",
						default: 0,
						title: "Offset",
						$schema: "https://json-schema.org/draft/2020-12/schema#",
					},
				},
				required: [],
			},
		],
	},
	response: {
		"200": {
			properties: {
				items: {
					items: {
						properties: {
							date: {
								type: "string",
								format: "date",
								title: "Date",
								description:
									"Date in YYYY-MM-DD format. This field represents the index date, which is the Monday following a complete data capture week that runs from Monday to Sunday. The index date serves as the anchor for aggregating and reporting the data collected during the preceding week (7 day) and also sets the reference point for the rolling aggregation periods of 30, 60, and 90 days ending on this date. For example, if data is captured from 2024-01-01 (Monday) to 2024-01-07 (Sunday), the index date will be 2024-01-08, the Monday immediately following the capture period . Data becomes available for access on the Thursday following the index date. If no data is returned for a specified index date, it signifies that no relevant events were recorded within the specified aggregation periods",
							},
							count: {
								description:
									"Count of investor-owned single family properties newly listed for sale, segmented by portfolio size",
								type: "object",
								required: ["rolling_7_day", "rolling_30_day", "rolling_60_day", "rolling_90_day"],
								title: "PortfolioWeeklyNLFSCountsSchema",
								properties: {
									rolling_7_day: {
										anyOf: [{ type: "integer" }, { type: "null" }],
										title: "Rolling 7 Day",
										description:
											"Aggregation period covers a 7 day period immediately preceding the index date. This period captures data from the previous Monday to Sunday. For example, if the index date is 2024-03-11 (a Monday), this aggregation period spans from 2024-03-04 to 2024-03-10. A NULL value indicates an absence of data during this period (equivalent to 0)",
									},
									rolling_30_day: {
										anyOf: [{ type: "integer" }, { type: "null" }],
										title: "Rolling 30 Day",
										description:
											"Aggregation period covers a 30 day period immediately preceding the index date. This period provides a rolling monthly view up to the Sunday before the index date. For example, with an index date of 2024-03-11, this aggregation period includes data from 2024-02-09 to 2024-03-10. A NULL value signifies no observed data within this timeframe (equivalent to 0)",
									},
									rolling_60_day: {
										anyOf: [{ type: "integer" }, { type: "null" }],
										title: "Rolling 60 Day",
										description:
											"Aggregation period covers a 60 day period immediately preceding the index date. This period offers a two-month view up to the Sunday before the index date. For example, with an index date of 2024-03-11, this aggregation period includes data from 2024-01-11 to 2024-03-10. A NULL value signifies no observed data within this timeframe (equivalent to 0)",
									},
									rolling_90_day: {
										anyOf: [{ type: "integer" }, { type: "null" }],
										title: "Rolling 90 Day",
										description:
											"Aggregation period covers a 90 day period immediately preceding the index date. This period provides a quarterly view up to the Sunday before the index date. For example, with an index date of 2024-03-11, this aggregation period includes data from 2023-12-12 to 2024-03-10. A NULL value signifies no observed data within this timeframe (equivalent to 0)",
									},
								},
							},
							pct_sf_for_sale_market: {
								description:
									"Percentage share of the total market for newly listed for sale single family properties that are investor-owned, segmented by portfolio size",
								type: "object",
								required: ["rolling_7_day", "rolling_30_day", "rolling_60_day", "rolling_90_day"],
								title: "PortfolioWeeklyNLFSPctSchema",
								properties: {
									rolling_7_day: {
										anyOf: [{ type: "number" }, { type: "null" }],
										title: "Rolling 7 Day",
										description:
											"Aggregation period covers a 7 day period immediately preceding the index date. This period captures data from the previous Monday to Sunday. For example, if the index date is 2024-03-11 (a Monday), this aggregation period spans from 2024-03-04 to 2024-03-10. A NULL value indicates an absence of data during this period (equivalent to 0)",
									},
									rolling_30_day: {
										anyOf: [{ type: "number" }, { type: "null" }],
										title: "Rolling 30 Day",
										description:
											"Aggregation period covers a 30 day period immediately preceding the index date. This period provides a rolling monthly view up to the Sunday before the index date. For example, with an index date of 2024-03-11, this aggregation period includes data from 2024-02-09 to 2024-03-10. A NULL value signifies no observed data within this timeframe (equivalent to 0)",
									},
									rolling_60_day: {
										anyOf: [{ type: "number" }, { type: "null" }],
										title: "Rolling 60 Day",
										description:
											"Aggregation period covers a 60 day period immediately preceding the index date. This period offers a two-month view up to the Sunday before the index date. For example, with an index date of 2024-03-11, this aggregation period includes data from 2024-01-11 to 2024-03-10. A NULL value signifies no observed data within this timeframe (equivalent to 0)",
									},
									rolling_90_day: {
										anyOf: [{ type: "number" }, { type: "null" }],
										title: "Rolling 90 Day",
										description:
											"Aggregation period covers a 90 day period immediately preceding the index date. This period provides a quarterly view up to the Sunday before the index date. For example, with an index date of 2024-03-11, this aggregation period includes data from 2023-12-12 to 2024-03-10. A NULL value signifies no observed data within this timeframe (equivalent to 0)",
									},
								},
							},
						},
						type: "object",
						required: ["date", "count", "pct_sf_for_sale_market"],
						title: "PortfolioWeeklyNLFSSchema",
					},
					type: "array",
					title: "Items",
				},
				total: { anyOf: [{ type: "integer", minimum: 0 }, { type: "null" }], title: "Total" },
				limit: { anyOf: [{ type: "integer", minimum: 1 }, { type: "null" }], title: "Limit" },
				offset: { anyOf: [{ type: "integer", minimum: 0 }, { type: "null" }], title: "Offset" },
				links: {
					properties: {
						first: {
							anyOf: [{ type: "string" }, { type: "null" }],
							title: "First",
							examples: ["/api/v1/users?limit=1&offset1"],
						},
						last: {
							anyOf: [{ type: "string" }, { type: "null" }],
							title: "Last",
							examples: ["/api/v1/users?limit=1&offset1"],
						},
						self: {
							anyOf: [{ type: "string" }, { type: "null" }],
							title: "Self",
							examples: ["/api/v1/users?limit=1&offset1"],
						},
						next: {
							anyOf: [{ type: "string" }, { type: "null" }],
							title: "Next",
							examples: ["/api/v1/users?limit=1&offset1"],
						},
						prev: {
							anyOf: [{ type: "string" }, { type: "null" }],
							title: "Prev",
							examples: ["/api/v1/users?limit=1&offset1"],
						},
					},
					type: "object",
					required: ["first", "last", "self", "next", "prev"],
					title: "Links",
				},
			},
			type: "object",
			required: ["items", "total", "limit", "offset", "links"],
			title: "LimitOffsetPage[PortfolioWeeklyNLFSSchema]",
			$schema: "https://json-schema.org/draft/2020-12/schema#",
		},
		"401": { $schema: "https://json-schema.org/draft/2020-12/schema#" },
		"403": { $schema: "https://json-schema.org/draft/2020-12/schema#" },
		"404": { $schema: "https://json-schema.org/draft/2020-12/schema#" },
		"422": { $schema: "https://json-schema.org/draft/2020-12/schema#" },
		"500": { $schema: "https://json-schema.org/draft/2020-12/schema#" },
	},
} as const;
export {
	GrossYieldV1RentalMarketMetricsParclIdGrossYieldGet,
	HousingEventCountsV1InvestorMetricsParclIdHousingEventCountsGet,
	HousingEventCountsV1MarketMetricsParclIdHousingEventCountsGet,
	HousingEventPricesV1InvestorMetricsParclIdHousingEventPricesGet,
	HousingEventPricesV1MarketMetricsParclIdHousingEventPricesGet,
	HousingStockOwnershipV1InvestorMetricsParclIdHousingStockOwnershipGet,
	HousingStockV1MarketMetricsParclIdHousingStockGet,
	NewListingsForRentRollingCountsV1RentalMarketMetricsParclIdNewListingsForRentRollingCountsGet,
	NewListingsForSaleRollingCountsV1InvestorMetricsParclIdNewListingsForSaleRollingCountsGet,
	NewListingsRollingCountsV1ForSaleMarketMetricsParclIdNewListingsRollingCountsGet,
	PurchaseToSaleRatioV1InvestorMetricsParclIdPurchaseToSaleRatioGet,
	RentalUnitsConcentrationV1RentalMarketMetricsParclIdRentalUnitsConcentrationGet,
	SearchMarketsV1SearchMarketsGet,
	SfHousingEventCountsV1PortfolioMetricsParclIdSfHousingEventCountsGet,
	SfHousingStockOwnershipV1PortfolioMetricsParclIdSfHousingStockOwnershipGet,
	SfNewListingsForRentRollingCountsV1PortfolioMetricsParclIdSfNewListingsForRentRollingCountsGet,
	SfNewListingsForSaleRollingCountsV1PortfolioMetricsParclIdSfNewListingsForSaleRollingCountsGet,
};
