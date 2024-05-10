import type * as types from './types';
import type { ConfigOptions, FetchResponse } from 'api/dist/core'
import Oas from 'oas';
import APICore from 'api/dist/core';
import definition from './openapi.json';

class SDK {
  spec: Oas;
  core: APICore;

  constructor() {
    this.spec = Oas.init(definition);
    this.core = new APICore(this.spec, 'labs-v2/0.4.0 (api/6.1.1)');
  }

  /**
   * Optionally configure various options that the SDK allows.
   *
   * @param config Object of supported SDK options and toggles.
   * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
   * should be represented in milliseconds.
   */
  config(config: ConfigOptions) {
    this.core.setConfig(config);
  }

  /**
   * If the API you're using requires authentication you can supply the required credentials
   * through this method and the library will magically determine how they should be used
   * within your API request.
   *
   * With the exception of OpenID and MutualTLS, it supports all forms of authentication
   * supported by the OpenAPI specification.
   *
   * @example <caption>HTTP Basic auth</caption>
   * sdk.auth('username', 'password');
   *
   * @example <caption>Bearer tokens (HTTP or OAuth 2)</caption>
   * sdk.auth('myBearerToken');
   *
   * @example <caption>API Keys</caption>
   * sdk.auth('myApiKey');
   *
   * @see {@link https://spec.openapis.org/oas/v3.0.3#fixed-fields-22}
   * @see {@link https://spec.openapis.org/oas/v3.1.0#fixed-fields-22}
   * @param values Your auth credentials for the API; can specify up to two strings or numbers.
   */
  auth(...values: string[] | number[]) {
    this.core.setAuth(...values);
    return this;
  }

  /**
   * If the API you're using offers alternate server URLs, and server variables, you can tell
   * the SDK which one to use with this method. To use it you can supply either one of the
   * server URLs that are contained within the OpenAPI definition (along with any server
   * variables), or you can pass it a fully qualified URL to use (that may or may not exist
   * within the OpenAPI definition).
   *
   * @example <caption>Server URL with server variables</caption>
   * sdk.server('https://{region}.api.example.com/{basePath}', {
   *   name: 'eu',
   *   basePath: 'v14',
   * });
   *
   * @example <caption>Fully qualified server URL</caption>
   * sdk.server('https://eu.api.example.com/v14');
   *
   * @param url Server URL
   * @param variables An object of variables to replace into the server URL.
   */
  server(url: string, variables = {}) {
    this.core.setServer(url, variables);
  }

  /**
   * Gets weekly updated rolling counts of newly listed for sale properties, segmented into
   * 7, 30, 60, and 90 day periods ending on a specified date, based on a given <parcl_id>.
   *
   * @summary New Listings Rolling Counts
   * @throws FetchError<401, types.NewListingsRollingCountsV1ForSaleMarketMetricsParclIdNewListingsRollingCountsGetResponse401> Invalid Token
   * @throws FetchError<403, types.NewListingsRollingCountsV1ForSaleMarketMetricsParclIdNewListingsRollingCountsGetResponse403> Forbidden
   * @throws FetchError<404, types.NewListingsRollingCountsV1ForSaleMarketMetricsParclIdNewListingsRollingCountsGetResponse404> Data not found
   * @throws FetchError<422, types.NewListingsRollingCountsV1ForSaleMarketMetricsParclIdNewListingsRollingCountsGetResponse422> Request Validation Error
   * @throws FetchError<500, types.NewListingsRollingCountsV1ForSaleMarketMetricsParclIdNewListingsRollingCountsGetResponse500> Database query error
   */
  new_listings_rolling_counts_v1_for_sale_market_metrics__parcl_id__new_listings_rolling_counts_get(metadata: types.NewListingsRollingCountsV1ForSaleMarketMetricsParclIdNewListingsRollingCountsGetMetadataParam): Promise<FetchResponse<200, types.NewListingsRollingCountsV1ForSaleMarketMetricsParclIdNewListingsRollingCountsGetResponse200>> {
    return this.core.fetch('/v1/for_sale_market_metrics/{parcl_id}/new_listings_rolling_counts', 'get', metadata);
  }

  /**
   * Gets monthly counts of housing events, including sales, new for sale listings, and new
   * rental listings, based on a specified <parcl_id>.
   *
   * @summary Housing Event Counts
   * @throws FetchError<401, types.HousingEventCountsV1MarketMetricsParclIdHousingEventCountsGetResponse401> Invalid Token
   * @throws FetchError<403, types.HousingEventCountsV1MarketMetricsParclIdHousingEventCountsGetResponse403> Forbidden
   * @throws FetchError<404, types.HousingEventCountsV1MarketMetricsParclIdHousingEventCountsGetResponse404> Data not found
   * @throws FetchError<422, types.HousingEventCountsV1MarketMetricsParclIdHousingEventCountsGetResponse422> Request Validation Error
   * @throws FetchError<500, types.HousingEventCountsV1MarketMetricsParclIdHousingEventCountsGetResponse500> Database query error
   */
  housing_event_counts_v1_market_metrics__parcl_id__housing_event_counts_get(metadata: types.HousingEventCountsV1MarketMetricsParclIdHousingEventCountsGetMetadataParam): Promise<FetchResponse<200, types.HousingEventCountsV1MarketMetricsParclIdHousingEventCountsGetResponse200>> {
    return this.core.fetch('/v1/market_metrics/{parcl_id}/housing_event_counts', 'get', metadata);
  }

  /**
   * Gets monthly statistics on prices for housing events, including sales, new for sale
   * listings, and new rental listings, based on a specified <parcl_id>.
   *
   * @summary Housing Event Prices
   * @throws FetchError<401, types.HousingEventPricesV1MarketMetricsParclIdHousingEventPricesGetResponse401> Invalid Token
   * @throws FetchError<403, types.HousingEventPricesV1MarketMetricsParclIdHousingEventPricesGetResponse403> Forbidden
   * @throws FetchError<404, types.HousingEventPricesV1MarketMetricsParclIdHousingEventPricesGetResponse404> Data not found
   * @throws FetchError<422, types.HousingEventPricesV1MarketMetricsParclIdHousingEventPricesGetResponse422> Request Validation Error
   * @throws FetchError<500, types.HousingEventPricesV1MarketMetricsParclIdHousingEventPricesGetResponse500> Database query error
   */
  housing_event_prices_v1_market_metrics__parcl_id__housing_event_prices_get(metadata: types.HousingEventPricesV1MarketMetricsParclIdHousingEventPricesGetMetadataParam): Promise<FetchResponse<200, types.HousingEventPricesV1MarketMetricsParclIdHousingEventPricesGetResponse200>> {
    return this.core.fetch('/v1/market_metrics/{parcl_id}/housing_event_prices', 'get', metadata);
  }

  /**
   * Gets housing stock for a specified <parcl_id>. Housing stock represents the total number
   * of properties, broken out by single family homes, townhouses, and condos.
   *
   * @summary Housing Stock
   * @throws FetchError<401, types.HousingStockV1MarketMetricsParclIdHousingStockGetResponse401> Invalid Token
   * @throws FetchError<403, types.HousingStockV1MarketMetricsParclIdHousingStockGetResponse403> Forbidden
   * @throws FetchError<404, types.HousingStockV1MarketMetricsParclIdHousingStockGetResponse404> Data not found
   * @throws FetchError<422, types.HousingStockV1MarketMetricsParclIdHousingStockGetResponse422> Request Validation Error
   * @throws FetchError<500, types.HousingStockV1MarketMetricsParclIdHousingStockGetResponse500> Database query error
   */
  housing_stock_v1_market_metrics__parcl_id__housing_stock_get(metadata: types.HousingStockV1MarketMetricsParclIdHousingStockGetMetadataParam): Promise<FetchResponse<200, types.HousingStockV1MarketMetricsParclIdHousingStockGetResponse200>> {
    return this.core.fetch('/v1/market_metrics/{parcl_id}/housing_stock', 'get', metadata);
  }

  /**
   * Gets monthly counts of investor housing events, including acquisitions, dispositions,
   * new for sale listings, and new rental listings, based on a specified <parcl_id>.
   *
   * @summary Housing Event Counts
   * @throws FetchError<401, types.HousingEventCountsV1InvestorMetricsParclIdHousingEventCountsGetResponse401> Invalid Token
   * @throws FetchError<403, types.HousingEventCountsV1InvestorMetricsParclIdHousingEventCountsGetResponse403> Forbidden
   * @throws FetchError<404, types.HousingEventCountsV1InvestorMetricsParclIdHousingEventCountsGetResponse404> Data not found
   * @throws FetchError<422, types.HousingEventCountsV1InvestorMetricsParclIdHousingEventCountsGetResponse422> Request Validation Error
   * @throws FetchError<500, types.HousingEventCountsV1InvestorMetricsParclIdHousingEventCountsGetResponse500> Database query error
   */
  housing_event_counts_v1_investor_metrics__parcl_id__housing_event_counts_get(metadata: types.HousingEventCountsV1InvestorMetricsParclIdHousingEventCountsGetMetadataParam): Promise<FetchResponse<200, types.HousingEventCountsV1InvestorMetricsParclIdHousingEventCountsGetResponse200>> {
    return this.core.fetch('/v1/investor_metrics/{parcl_id}/housing_event_counts', 'get', metadata);
  }

  /**
   * Gets monthly median prices for investor housing events, including acquisitions,
   * dispositions, new sale listings, and new rental listings, based on a specified
   * <parcl_id>.
   *
   * @summary Housing Event Prices
   * @throws FetchError<401, types.HousingEventPricesV1InvestorMetricsParclIdHousingEventPricesGetResponse401> Invalid Token
   * @throws FetchError<403, types.HousingEventPricesV1InvestorMetricsParclIdHousingEventPricesGetResponse403> Forbidden
   * @throws FetchError<404, types.HousingEventPricesV1InvestorMetricsParclIdHousingEventPricesGetResponse404> Data not found
   * @throws FetchError<422, types.HousingEventPricesV1InvestorMetricsParclIdHousingEventPricesGetResponse422> Request Validation Error
   * @throws FetchError<500, types.HousingEventPricesV1InvestorMetricsParclIdHousingEventPricesGetResponse500> Database query error
   */
  housing_event_prices_v1_investor_metrics__parcl_id__housing_event_prices_get(metadata: types.HousingEventPricesV1InvestorMetricsParclIdHousingEventPricesGetMetadataParam): Promise<FetchResponse<200, types.HousingEventPricesV1InvestorMetricsParclIdHousingEventPricesGetResponse200>> {
    return this.core.fetch('/v1/investor_metrics/{parcl_id}/housing_event_prices', 'get', metadata);
  }

  /**
   * Gets counts of investor-owned properties and their corresponding percentage ownership
   * share of the total housing stock, for a specified <parcl_id>.
   *
   * @summary Housing Stock Ownership
   * @throws FetchError<401, types.HousingStockOwnershipV1InvestorMetricsParclIdHousingStockOwnershipGetResponse401> Invalid Token
   * @throws FetchError<403, types.HousingStockOwnershipV1InvestorMetricsParclIdHousingStockOwnershipGetResponse403> Forbidden
   * @throws FetchError<404, types.HousingStockOwnershipV1InvestorMetricsParclIdHousingStockOwnershipGetResponse404> Data not found
   * @throws FetchError<422, types.HousingStockOwnershipV1InvestorMetricsParclIdHousingStockOwnershipGetResponse422> Request Validation Error
   * @throws FetchError<500, types.HousingStockOwnershipV1InvestorMetricsParclIdHousingStockOwnershipGetResponse500> Database query error
   */
  housing_stock_ownership_v1_investor_metrics__parcl_id__housing_stock_ownership_get(metadata: types.HousingStockOwnershipV1InvestorMetricsParclIdHousingStockOwnershipGetMetadataParam): Promise<FetchResponse<200, types.HousingStockOwnershipV1InvestorMetricsParclIdHousingStockOwnershipGetResponse200>> {
    return this.core.fetch('/v1/investor_metrics/{parcl_id}/housing_stock_ownership', 'get', metadata);
  }

  /**
   * Gets weekly updated rolling counts of investor-owned properties newly listed for sale,
   * and their corresponding percentage share of the total for sale listings market. These
   * metrics are segmented into 7, 30, 60, and 90 day periods ending on a specified date,
   * based on a given <parcl_id>
   *
   * @summary New Listings For Sale Rolling Counts
   * @throws FetchError<401, types.NewListingsForSaleRollingCountsV1InvestorMetricsParclIdNewListingsForSaleRollingCountsGetResponse401> Invalid Token
   * @throws FetchError<403, types.NewListingsForSaleRollingCountsV1InvestorMetricsParclIdNewListingsForSaleRollingCountsGetResponse403> Forbidden
   * @throws FetchError<404, types.NewListingsForSaleRollingCountsV1InvestorMetricsParclIdNewListingsForSaleRollingCountsGetResponse404> Data not found
   * @throws FetchError<422, types.NewListingsForSaleRollingCountsV1InvestorMetricsParclIdNewListingsForSaleRollingCountsGetResponse422> Request Validation Error
   * @throws FetchError<500, types.NewListingsForSaleRollingCountsV1InvestorMetricsParclIdNewListingsForSaleRollingCountsGetResponse500> Database query error
   */
  new_listings_for_sale_rolling_counts_v1_investor_metrics__parcl_id__new_listings_for_sale_rolling_counts_get(metadata: types.NewListingsForSaleRollingCountsV1InvestorMetricsParclIdNewListingsForSaleRollingCountsGetMetadataParam): Promise<FetchResponse<200, types.NewListingsForSaleRollingCountsV1InvestorMetricsParclIdNewListingsForSaleRollingCountsGetResponse200>> {
    return this.core.fetch('/v1/investor_metrics/{parcl_id}/new_listings_for_sale_rolling_counts', 'get', metadata);
  }

  /**
   * Gets the monthly investor purchase to sale ratio for a specified <parcl_id>.
   *
   * @summary Purchase To Sale Ratio
   * @throws FetchError<401, types.PurchaseToSaleRatioV1InvestorMetricsParclIdPurchaseToSaleRatioGetResponse401> Invalid Token
   * @throws FetchError<403, types.PurchaseToSaleRatioV1InvestorMetricsParclIdPurchaseToSaleRatioGetResponse403> Forbidden
   * @throws FetchError<404, types.PurchaseToSaleRatioV1InvestorMetricsParclIdPurchaseToSaleRatioGetResponse404> Data not found
   * @throws FetchError<422, types.PurchaseToSaleRatioV1InvestorMetricsParclIdPurchaseToSaleRatioGetResponse422> Request Validation Error
   * @throws FetchError<500, types.PurchaseToSaleRatioV1InvestorMetricsParclIdPurchaseToSaleRatioGetResponse500> Database query error
   */
  purchase_to_sale_ratio_v1_investor_metrics__parcl_id__purchase_to_sale_ratio_get(metadata: types.PurchaseToSaleRatioV1InvestorMetricsParclIdPurchaseToSaleRatioGetMetadataParam): Promise<FetchResponse<200, types.PurchaseToSaleRatioV1InvestorMetricsParclIdPurchaseToSaleRatioGetResponse200>> {
    return this.core.fetch('/v1/investor_metrics/{parcl_id}/purchase_to_sale_ratio', 'get', metadata);
  }

  /**
   * Gets the percent gross yield for a specified <parcl_id>. At the market level, identified
   * by <parcl_id>, gross yield is calculated by dividing the annual median rental
   * income—derived from multiplying the monthly median new rental listing price by 12—by its
   * median new listings for sale price.
   *
   * @summary Gross Yield
   * @throws FetchError<401, types.GrossYieldV1RentalMarketMetricsParclIdGrossYieldGetResponse401> Invalid Token
   * @throws FetchError<403, types.GrossYieldV1RentalMarketMetricsParclIdGrossYieldGetResponse403> Forbidden
   * @throws FetchError<404, types.GrossYieldV1RentalMarketMetricsParclIdGrossYieldGetResponse404> Data not found
   * @throws FetchError<422, types.GrossYieldV1RentalMarketMetricsParclIdGrossYieldGetResponse422> Request Validation Error
   * @throws FetchError<500, types.GrossYieldV1RentalMarketMetricsParclIdGrossYieldGetResponse500> Database query error
   */
  gross_yield_v1_rental_market_metrics__parcl_id__gross_yield_get(metadata: types.GrossYieldV1RentalMarketMetricsParclIdGrossYieldGetMetadataParam): Promise<FetchResponse<200, types.GrossYieldV1RentalMarketMetricsParclIdGrossYieldGetResponse200>> {
    return this.core.fetch('/v1/rental_market_metrics/{parcl_id}/gross_yield', 'get', metadata);
  }

  /**
   * Gets weekly updated rolling counts of newly listed for rent properties, segmented into
   * 7, 30, 60, and 90 day periods ending on a specified date, based on a given <parcl_id>.
   *
   * @summary New Listings For Rent Rolling Counts
   * @throws FetchError<401, types.NewListingsForRentRollingCountsV1RentalMarketMetricsParclIdNewListingsForRentRollingCountsGetResponse401> Invalid Token
   * @throws FetchError<403, types.NewListingsForRentRollingCountsV1RentalMarketMetricsParclIdNewListingsForRentRollingCountsGetResponse403> Forbidden
   * @throws FetchError<404, types.NewListingsForRentRollingCountsV1RentalMarketMetricsParclIdNewListingsForRentRollingCountsGetResponse404> Data not found
   * @throws FetchError<422, types.NewListingsForRentRollingCountsV1RentalMarketMetricsParclIdNewListingsForRentRollingCountsGetResponse422> Request Validation Error
   * @throws FetchError<500, types.NewListingsForRentRollingCountsV1RentalMarketMetricsParclIdNewListingsForRentRollingCountsGetResponse500> Database query error
   */
  new_listings_for_rent_rolling_counts_v1_rental_market_metrics__parcl_id__new_listings_for_rent_rolling_counts_get(metadata: types.NewListingsForRentRollingCountsV1RentalMarketMetricsParclIdNewListingsForRentRollingCountsGetMetadataParam): Promise<FetchResponse<200, types.NewListingsForRentRollingCountsV1RentalMarketMetricsParclIdNewListingsForRentRollingCountsGetResponse200>> {
    return this.core.fetch('/v1/rental_market_metrics/{parcl_id}/new_listings_for_rent_rolling_counts', 'get', metadata);
  }

  /**
   * Gets the number of rental units, total units, and percent rental unit concentration for
   * a specified <parcl_id>.
   *
   * @summary Rental Units Concentration
   * @throws FetchError<401, types.RentalUnitsConcentrationV1RentalMarketMetricsParclIdRentalUnitsConcentrationGetResponse401> Invalid Token
   * @throws FetchError<403, types.RentalUnitsConcentrationV1RentalMarketMetricsParclIdRentalUnitsConcentrationGetResponse403> Forbidden
   * @throws FetchError<404, types.RentalUnitsConcentrationV1RentalMarketMetricsParclIdRentalUnitsConcentrationGetResponse404> Data not found
   * @throws FetchError<422, types.RentalUnitsConcentrationV1RentalMarketMetricsParclIdRentalUnitsConcentrationGetResponse422> Request Validation Error
   * @throws FetchError<500, types.RentalUnitsConcentrationV1RentalMarketMetricsParclIdRentalUnitsConcentrationGetResponse500> Database query error
   */
  rental_units_concentration_v1_rental_market_metrics__parcl_id__rental_units_concentration_get(metadata: types.RentalUnitsConcentrationV1RentalMarketMetricsParclIdRentalUnitsConcentrationGetMetadataParam): Promise<FetchResponse<200, types.RentalUnitsConcentrationV1RentalMarketMetricsParclIdRentalUnitsConcentrationGetResponse200>> {
    return this.core.fetch('/v1/rental_market_metrics/{parcl_id}/rental_units_concentration', 'get', metadata);
  }

  /**
   * Gets a list of unique identifiers (<parcl_id>) for markets that correspond to specific
   * keywords or parameters defined by the user. The <parcl_id> is key to navigating the
   * Parcl Labs API, serving as the core mechanism for retrieving market-level information.
   *
   * @summary Search Markets
   * @throws FetchError<401, types.SearchMarketsV1SearchMarketsGetResponse401> Invalid Token
   * @throws FetchError<403, types.SearchMarketsV1SearchMarketsGetResponse403> Forbidden
   * @throws FetchError<404, types.SearchMarketsV1SearchMarketsGetResponse404> No search results
   * @throws FetchError<422, types.SearchMarketsV1SearchMarketsGetResponse422> Request Validation Error
   * @throws FetchError<500, types.SearchMarketsV1SearchMarketsGetResponse500> Database query error
   */
  search_markets_v1_search_markets_get(metadata?: types.SearchMarketsV1SearchMarketsGetMetadataParam): Promise<FetchResponse<200, types.SearchMarketsV1SearchMarketsGetResponse200>> {
    return this.core.fetch('/v1/search/markets', 'get', metadata);
  }

  /**
   * Gets monthly counts of investor-owned single family property housing events, segmented
   * by portfolio size, for a specified <parcl_id>. Housing events include acquisitions,
   * dispositions, new for sale listings, and new rental listings.
   *
   * @summary Sf Housing Event Counts
   * @throws FetchError<401, types.SfHousingEventCountsV1PortfolioMetricsParclIdSfHousingEventCountsGetResponse401> Invalid Token
   * @throws FetchError<403, types.SfHousingEventCountsV1PortfolioMetricsParclIdSfHousingEventCountsGetResponse403> Forbidden
   * @throws FetchError<404, types.SfHousingEventCountsV1PortfolioMetricsParclIdSfHousingEventCountsGetResponse404> Data not found
   * @throws FetchError<422, types.SfHousingEventCountsV1PortfolioMetricsParclIdSfHousingEventCountsGetResponse422> Request Validation Error
   * @throws FetchError<500, types.SfHousingEventCountsV1PortfolioMetricsParclIdSfHousingEventCountsGetResponse500> Database query error
   */
  sf_housing_event_counts_v1_portfolio_metrics__parcl_id__sf_housing_event_counts_get(metadata: types.SfHousingEventCountsV1PortfolioMetricsParclIdSfHousingEventCountsGetMetadataParam): Promise<FetchResponse<200, types.SfHousingEventCountsV1PortfolioMetricsParclIdSfHousingEventCountsGetResponse200>> {
    return this.core.fetch('/v1/portfolio_metrics/{parcl_id}/sf_housing_event_counts', 'get', metadata);
  }

  /**
   * Gets counts of investor-owned single family properties and their corresponding
   * percentage of the total single family housing stock, segmented by portfolio size, for a
   * specified <parcl_id>. The data series for portfolio metrics begins on March 1, 2024
   * (2024-03-01).
   *
   * @summary Sf Housing Stock Ownership
   * @throws FetchError<401, types.SfHousingStockOwnershipV1PortfolioMetricsParclIdSfHousingStockOwnershipGetResponse401> Invalid Token
   * @throws FetchError<403, types.SfHousingStockOwnershipV1PortfolioMetricsParclIdSfHousingStockOwnershipGetResponse403> Forbidden
   * @throws FetchError<404, types.SfHousingStockOwnershipV1PortfolioMetricsParclIdSfHousingStockOwnershipGetResponse404> Data not found
   * @throws FetchError<422, types.SfHousingStockOwnershipV1PortfolioMetricsParclIdSfHousingStockOwnershipGetResponse422> Request Validation Error
   * @throws FetchError<500, types.SfHousingStockOwnershipV1PortfolioMetricsParclIdSfHousingStockOwnershipGetResponse500> Database query error
   */
  sf_housing_stock_ownership_v1_portfolio_metrics__parcl_id__sf_housing_stock_ownership_get(metadata: types.SfHousingStockOwnershipV1PortfolioMetricsParclIdSfHousingStockOwnershipGetMetadataParam): Promise<FetchResponse<200, types.SfHousingStockOwnershipV1PortfolioMetricsParclIdSfHousingStockOwnershipGetResponse200>> {
    return this.core.fetch('/v1/portfolio_metrics/{parcl_id}/sf_housing_stock_ownership', 'get', metadata);
  }

  /**
   * Gets weekly updated rolling counts of investor-owned single family properties newly
   * listed for rent, segmented by portfolio size, and their corresponding percentage share
   * of the total single family for rent listings market. These metrics are divided into 7,
   * 30, 60, and 90 day periods ending on a specified date, based on a given <parcl_id>. The
   * data series for portfolio metrics begins on April 22, 2024 (2024-04-22).
   *
   * @summary Sf New Listings For Rent Rolling Counts
   * @throws FetchError<401, types.SfNewListingsForRentRollingCountsV1PortfolioMetricsParclIdSfNewListingsForRentRollingCountsGetResponse401> Invalid Token
   * @throws FetchError<403, types.SfNewListingsForRentRollingCountsV1PortfolioMetricsParclIdSfNewListingsForRentRollingCountsGetResponse403> Forbidden
   * @throws FetchError<404, types.SfNewListingsForRentRollingCountsV1PortfolioMetricsParclIdSfNewListingsForRentRollingCountsGetResponse404> Data not found
   * @throws FetchError<422, types.SfNewListingsForRentRollingCountsV1PortfolioMetricsParclIdSfNewListingsForRentRollingCountsGetResponse422> Request Validation Error
   * @throws FetchError<500, types.SfNewListingsForRentRollingCountsV1PortfolioMetricsParclIdSfNewListingsForRentRollingCountsGetResponse500> Database query error
   */
  sf_new_listings_for_rent_rolling_counts_v1_portfolio_metrics__parcl_id__sf_new_listings_for_rent_rolling_counts_get(metadata: types.SfNewListingsForRentRollingCountsV1PortfolioMetricsParclIdSfNewListingsForRentRollingCountsGetMetadataParam): Promise<FetchResponse<200, types.SfNewListingsForRentRollingCountsV1PortfolioMetricsParclIdSfNewListingsForRentRollingCountsGetResponse200>> {
    return this.core.fetch('/v1/portfolio_metrics/{parcl_id}/sf_new_listings_for_rent_rolling_counts', 'get', metadata);
  }

  /**
   * Gets counts of investor-owned single family properties and their corresponding
   * percentage of the total single family housing stock, segmented by portfolio size, for a
   * specified <parcl_id>. The data series for portfolio metrics begins on April 15, 2024
   * (2024-04-15).
   *
   * @summary Sf New Listings For Sale Rolling Counts
   * @throws FetchError<401, types.SfNewListingsForSaleRollingCountsV1PortfolioMetricsParclIdSfNewListingsForSaleRollingCountsGetResponse401> Invalid Token
   * @throws FetchError<403, types.SfNewListingsForSaleRollingCountsV1PortfolioMetricsParclIdSfNewListingsForSaleRollingCountsGetResponse403> Forbidden
   * @throws FetchError<404, types.SfNewListingsForSaleRollingCountsV1PortfolioMetricsParclIdSfNewListingsForSaleRollingCountsGetResponse404> Data not found
   * @throws FetchError<422, types.SfNewListingsForSaleRollingCountsV1PortfolioMetricsParclIdSfNewListingsForSaleRollingCountsGetResponse422> Request Validation Error
   * @throws FetchError<500, types.SfNewListingsForSaleRollingCountsV1PortfolioMetricsParclIdSfNewListingsForSaleRollingCountsGetResponse500> Database query error
   */
  sf_new_listings_for_sale_rolling_counts_v1_portfolio_metrics__parcl_id__sf_new_listings_for_sale_rolling_counts_get(metadata: types.SfNewListingsForSaleRollingCountsV1PortfolioMetricsParclIdSfNewListingsForSaleRollingCountsGetMetadataParam): Promise<FetchResponse<200, types.SfNewListingsForSaleRollingCountsV1PortfolioMetricsParclIdSfNewListingsForSaleRollingCountsGetResponse200>> {
    return this.core.fetch('/v1/portfolio_metrics/{parcl_id}/sf_new_listings_for_sale_rolling_counts', 'get', metadata);
  }
}

const createSDK = (() => { return new SDK(); })()
;

export default createSDK;

export type { GrossYieldV1RentalMarketMetricsParclIdGrossYieldGetMetadataParam, GrossYieldV1RentalMarketMetricsParclIdGrossYieldGetResponse200, GrossYieldV1RentalMarketMetricsParclIdGrossYieldGetResponse401, GrossYieldV1RentalMarketMetricsParclIdGrossYieldGetResponse403, GrossYieldV1RentalMarketMetricsParclIdGrossYieldGetResponse404, GrossYieldV1RentalMarketMetricsParclIdGrossYieldGetResponse422, GrossYieldV1RentalMarketMetricsParclIdGrossYieldGetResponse500, HousingEventCountsV1InvestorMetricsParclIdHousingEventCountsGetMetadataParam, HousingEventCountsV1InvestorMetricsParclIdHousingEventCountsGetResponse200, HousingEventCountsV1InvestorMetricsParclIdHousingEventCountsGetResponse401, HousingEventCountsV1InvestorMetricsParclIdHousingEventCountsGetResponse403, HousingEventCountsV1InvestorMetricsParclIdHousingEventCountsGetResponse404, HousingEventCountsV1InvestorMetricsParclIdHousingEventCountsGetResponse422, HousingEventCountsV1InvestorMetricsParclIdHousingEventCountsGetResponse500, HousingEventCountsV1MarketMetricsParclIdHousingEventCountsGetMetadataParam, HousingEventCountsV1MarketMetricsParclIdHousingEventCountsGetResponse200, HousingEventCountsV1MarketMetricsParclIdHousingEventCountsGetResponse401, HousingEventCountsV1MarketMetricsParclIdHousingEventCountsGetResponse403, HousingEventCountsV1MarketMetricsParclIdHousingEventCountsGetResponse404, HousingEventCountsV1MarketMetricsParclIdHousingEventCountsGetResponse422, HousingEventCountsV1MarketMetricsParclIdHousingEventCountsGetResponse500, HousingEventPricesV1InvestorMetricsParclIdHousingEventPricesGetMetadataParam, HousingEventPricesV1InvestorMetricsParclIdHousingEventPricesGetResponse200, HousingEventPricesV1InvestorMetricsParclIdHousingEventPricesGetResponse401, HousingEventPricesV1InvestorMetricsParclIdHousingEventPricesGetResponse403, HousingEventPricesV1InvestorMetricsParclIdHousingEventPricesGetResponse404, HousingEventPricesV1InvestorMetricsParclIdHousingEventPricesGetResponse422, HousingEventPricesV1InvestorMetricsParclIdHousingEventPricesGetResponse500, HousingEventPricesV1MarketMetricsParclIdHousingEventPricesGetMetadataParam, HousingEventPricesV1MarketMetricsParclIdHousingEventPricesGetResponse200, HousingEventPricesV1MarketMetricsParclIdHousingEventPricesGetResponse401, HousingEventPricesV1MarketMetricsParclIdHousingEventPricesGetResponse403, HousingEventPricesV1MarketMetricsParclIdHousingEventPricesGetResponse404, HousingEventPricesV1MarketMetricsParclIdHousingEventPricesGetResponse422, HousingEventPricesV1MarketMetricsParclIdHousingEventPricesGetResponse500, HousingStockOwnershipV1InvestorMetricsParclIdHousingStockOwnershipGetMetadataParam, HousingStockOwnershipV1InvestorMetricsParclIdHousingStockOwnershipGetResponse200, HousingStockOwnershipV1InvestorMetricsParclIdHousingStockOwnershipGetResponse401, HousingStockOwnershipV1InvestorMetricsParclIdHousingStockOwnershipGetResponse403, HousingStockOwnershipV1InvestorMetricsParclIdHousingStockOwnershipGetResponse404, HousingStockOwnershipV1InvestorMetricsParclIdHousingStockOwnershipGetResponse422, HousingStockOwnershipV1InvestorMetricsParclIdHousingStockOwnershipGetResponse500, HousingStockV1MarketMetricsParclIdHousingStockGetMetadataParam, HousingStockV1MarketMetricsParclIdHousingStockGetResponse200, HousingStockV1MarketMetricsParclIdHousingStockGetResponse401, HousingStockV1MarketMetricsParclIdHousingStockGetResponse403, HousingStockV1MarketMetricsParclIdHousingStockGetResponse404, HousingStockV1MarketMetricsParclIdHousingStockGetResponse422, HousingStockV1MarketMetricsParclIdHousingStockGetResponse500, NewListingsForRentRollingCountsV1RentalMarketMetricsParclIdNewListingsForRentRollingCountsGetMetadataParam, NewListingsForRentRollingCountsV1RentalMarketMetricsParclIdNewListingsForRentRollingCountsGetResponse200, NewListingsForRentRollingCountsV1RentalMarketMetricsParclIdNewListingsForRentRollingCountsGetResponse401, NewListingsForRentRollingCountsV1RentalMarketMetricsParclIdNewListingsForRentRollingCountsGetResponse403, NewListingsForRentRollingCountsV1RentalMarketMetricsParclIdNewListingsForRentRollingCountsGetResponse404, NewListingsForRentRollingCountsV1RentalMarketMetricsParclIdNewListingsForRentRollingCountsGetResponse422, NewListingsForRentRollingCountsV1RentalMarketMetricsParclIdNewListingsForRentRollingCountsGetResponse500, NewListingsForSaleRollingCountsV1InvestorMetricsParclIdNewListingsForSaleRollingCountsGetMetadataParam, NewListingsForSaleRollingCountsV1InvestorMetricsParclIdNewListingsForSaleRollingCountsGetResponse200, NewListingsForSaleRollingCountsV1InvestorMetricsParclIdNewListingsForSaleRollingCountsGetResponse401, NewListingsForSaleRollingCountsV1InvestorMetricsParclIdNewListingsForSaleRollingCountsGetResponse403, NewListingsForSaleRollingCountsV1InvestorMetricsParclIdNewListingsForSaleRollingCountsGetResponse404, NewListingsForSaleRollingCountsV1InvestorMetricsParclIdNewListingsForSaleRollingCountsGetResponse422, NewListingsForSaleRollingCountsV1InvestorMetricsParclIdNewListingsForSaleRollingCountsGetResponse500, NewListingsRollingCountsV1ForSaleMarketMetricsParclIdNewListingsRollingCountsGetMetadataParam, NewListingsRollingCountsV1ForSaleMarketMetricsParclIdNewListingsRollingCountsGetResponse200, NewListingsRollingCountsV1ForSaleMarketMetricsParclIdNewListingsRollingCountsGetResponse401, NewListingsRollingCountsV1ForSaleMarketMetricsParclIdNewListingsRollingCountsGetResponse403, NewListingsRollingCountsV1ForSaleMarketMetricsParclIdNewListingsRollingCountsGetResponse404, NewListingsRollingCountsV1ForSaleMarketMetricsParclIdNewListingsRollingCountsGetResponse422, NewListingsRollingCountsV1ForSaleMarketMetricsParclIdNewListingsRollingCountsGetResponse500, PurchaseToSaleRatioV1InvestorMetricsParclIdPurchaseToSaleRatioGetMetadataParam, PurchaseToSaleRatioV1InvestorMetricsParclIdPurchaseToSaleRatioGetResponse200, PurchaseToSaleRatioV1InvestorMetricsParclIdPurchaseToSaleRatioGetResponse401, PurchaseToSaleRatioV1InvestorMetricsParclIdPurchaseToSaleRatioGetResponse403, PurchaseToSaleRatioV1InvestorMetricsParclIdPurchaseToSaleRatioGetResponse404, PurchaseToSaleRatioV1InvestorMetricsParclIdPurchaseToSaleRatioGetResponse422, PurchaseToSaleRatioV1InvestorMetricsParclIdPurchaseToSaleRatioGetResponse500, RentalUnitsConcentrationV1RentalMarketMetricsParclIdRentalUnitsConcentrationGetMetadataParam, RentalUnitsConcentrationV1RentalMarketMetricsParclIdRentalUnitsConcentrationGetResponse200, RentalUnitsConcentrationV1RentalMarketMetricsParclIdRentalUnitsConcentrationGetResponse401, RentalUnitsConcentrationV1RentalMarketMetricsParclIdRentalUnitsConcentrationGetResponse403, RentalUnitsConcentrationV1RentalMarketMetricsParclIdRentalUnitsConcentrationGetResponse404, RentalUnitsConcentrationV1RentalMarketMetricsParclIdRentalUnitsConcentrationGetResponse422, RentalUnitsConcentrationV1RentalMarketMetricsParclIdRentalUnitsConcentrationGetResponse500, SearchMarketsV1SearchMarketsGetMetadataParam, SearchMarketsV1SearchMarketsGetResponse200, SearchMarketsV1SearchMarketsGetResponse401, SearchMarketsV1SearchMarketsGetResponse403, SearchMarketsV1SearchMarketsGetResponse404, SearchMarketsV1SearchMarketsGetResponse422, SearchMarketsV1SearchMarketsGetResponse500, SfHousingEventCountsV1PortfolioMetricsParclIdSfHousingEventCountsGetMetadataParam, SfHousingEventCountsV1PortfolioMetricsParclIdSfHousingEventCountsGetResponse200, SfHousingEventCountsV1PortfolioMetricsParclIdSfHousingEventCountsGetResponse401, SfHousingEventCountsV1PortfolioMetricsParclIdSfHousingEventCountsGetResponse403, SfHousingEventCountsV1PortfolioMetricsParclIdSfHousingEventCountsGetResponse404, SfHousingEventCountsV1PortfolioMetricsParclIdSfHousingEventCountsGetResponse422, SfHousingEventCountsV1PortfolioMetricsParclIdSfHousingEventCountsGetResponse500, SfHousingStockOwnershipV1PortfolioMetricsParclIdSfHousingStockOwnershipGetMetadataParam, SfHousingStockOwnershipV1PortfolioMetricsParclIdSfHousingStockOwnershipGetResponse200, SfHousingStockOwnershipV1PortfolioMetricsParclIdSfHousingStockOwnershipGetResponse401, SfHousingStockOwnershipV1PortfolioMetricsParclIdSfHousingStockOwnershipGetResponse403, SfHousingStockOwnershipV1PortfolioMetricsParclIdSfHousingStockOwnershipGetResponse404, SfHousingStockOwnershipV1PortfolioMetricsParclIdSfHousingStockOwnershipGetResponse422, SfHousingStockOwnershipV1PortfolioMetricsParclIdSfHousingStockOwnershipGetResponse500, SfNewListingsForRentRollingCountsV1PortfolioMetricsParclIdSfNewListingsForRentRollingCountsGetMetadataParam, SfNewListingsForRentRollingCountsV1PortfolioMetricsParclIdSfNewListingsForRentRollingCountsGetResponse200, SfNewListingsForRentRollingCountsV1PortfolioMetricsParclIdSfNewListingsForRentRollingCountsGetResponse401, SfNewListingsForRentRollingCountsV1PortfolioMetricsParclIdSfNewListingsForRentRollingCountsGetResponse403, SfNewListingsForRentRollingCountsV1PortfolioMetricsParclIdSfNewListingsForRentRollingCountsGetResponse404, SfNewListingsForRentRollingCountsV1PortfolioMetricsParclIdSfNewListingsForRentRollingCountsGetResponse422, SfNewListingsForRentRollingCountsV1PortfolioMetricsParclIdSfNewListingsForRentRollingCountsGetResponse500, SfNewListingsForSaleRollingCountsV1PortfolioMetricsParclIdSfNewListingsForSaleRollingCountsGetMetadataParam, SfNewListingsForSaleRollingCountsV1PortfolioMetricsParclIdSfNewListingsForSaleRollingCountsGetResponse200, SfNewListingsForSaleRollingCountsV1PortfolioMetricsParclIdSfNewListingsForSaleRollingCountsGetResponse401, SfNewListingsForSaleRollingCountsV1PortfolioMetricsParclIdSfNewListingsForSaleRollingCountsGetResponse403, SfNewListingsForSaleRollingCountsV1PortfolioMetricsParclIdSfNewListingsForSaleRollingCountsGetResponse404, SfNewListingsForSaleRollingCountsV1PortfolioMetricsParclIdSfNewListingsForSaleRollingCountsGetResponse422, SfNewListingsForSaleRollingCountsV1PortfolioMetricsParclIdSfNewListingsForSaleRollingCountsGetResponse500 } from './types';
