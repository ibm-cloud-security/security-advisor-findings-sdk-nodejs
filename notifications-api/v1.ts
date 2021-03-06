/**
 * (C) Copyright IBM Corp. 2021.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * IBM OpenAPI SDK Code Generator Version: 3.30.0-bd714324-20210406-200538
 */


import * as extend from 'extend';
import { IncomingHttpHeaders, OutgoingHttpHeaders } from 'http';
import { Authenticator, BaseService, getAuthenticatorFromEnvironment, getMissingParams, UserOptions } from 'ibm-cloud-sdk-core';
import { getSdkHeaders } from '../lib/common';

/**
 * notifications-api
 */

class NotificationsApiV1 extends BaseService {
  static DEFAULT_SERVICE_URL: string = 'https://us-south.secadvisor.cloud.ibm.com/notifications';
  static DEFAULT_SERVICE_NAME: string = 'notifications_api';

  /*************************
   * Factory method
   ************************/

  /**
   * Constructs an instance of NotificationsApiV1 with passed in options and external configuration.
   *
   * @param {UserOptions} [options] - The parameters to send to the service.
   * @param {string} [options.serviceName] - The name of the service to configure
   * @param {Authenticator} [options.authenticator] - The Authenticator object used to authenticate requests to the service
   * @param {string} [options.serviceUrl] - The URL for the service
   * @returns {NotificationsApiV1}
   */

  public static newInstance(options: UserOptions): NotificationsApiV1 {
    options = options || {};

    if (!options.serviceName) {
      options.serviceName = this.DEFAULT_SERVICE_NAME;
    }
    if (!options.authenticator) {
      options.authenticator = getAuthenticatorFromEnvironment(options.serviceName);
    }
    const service = new NotificationsApiV1(options);
    service.configureService(options.serviceName);
    if (options.serviceUrl) {
      service.setServiceUrl(options.serviceUrl);
    }
    return service;
  }


  /**
   * Construct a NotificationsApiV1 object.
   *
   * @param {Object} options - Options for the service.
   * @param {string} [options.serviceUrl] - The base url to use when contacting the service. The base url may differ between IBM Cloud regions.
   * @param {OutgoingHttpHeaders} [options.headers] - Default headers that shall be included with every request to the service.
   * @param {Authenticator} options.authenticator - The Authenticator object used to authenticate requests to the service
   * @constructor
   * @returns {NotificationsApiV1}
   */
  constructor(options: UserOptions) {
    options = options || {};

    super(options);
    if (options.serviceUrl) {
      this.setServiceUrl(options.serviceUrl);
    } else {
      this.setServiceUrl(NotificationsApiV1.DEFAULT_SERVICE_URL);
    }
  }

  /*************************
   * notificationChannel
   ************************/

  /**
   * list all channels.
   *
   * list all channels under this account.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.accountId - Account ID.
   * @param {string} [params.transactionId] - The transaction id for the request in uuid v4 format.
   * @param {number} [params.limit] - Limit the number of the returned documents to the specified number.
   * @param {number} [params.skip] - The offset is the index of the item from which you want to start returning data
   * from. Default is 0.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<NotificationsApiV1.Response<NotificationsApiV1.ChannelsList>>}
   */
  public listAllChannels(params: NotificationsApiV1.ListAllChannelsParams): Promise<NotificationsApiV1.Response<NotificationsApiV1.ChannelsList>> {
    const _params = Object.assign({}, params);
    const requiredParams = ['accountId'];

    const missingParams = getMissingParams(_params, requiredParams);
    if (missingParams) {
      return Promise.reject(missingParams);
    }

    const query = {
      'limit': _params.limit,
      'skip': _params.skip
    };

    const path = {
      'account_id': _params.accountId
    };

    const sdkHeaders = getSdkHeaders(NotificationsApiV1.DEFAULT_SERVICE_NAME, 'v1', 'listAllChannels');

    const parameters = {
      options: {
        url: '/v1/{account_id}/notifications/channels',
        method: 'GET',
        qs: query,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(true, sdkHeaders, {
          'Accept': 'application/json',
          'Transaction-Id': _params.transactionId
        }, _params.headers),
      }),
    };

    return this.createRequest(parameters);
  };

  /**
   * create notification channel.
   *
   * create notification channel.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.accountId - Account ID.
   * @param {string} params.name -
   * @param {string} params.type - Type of callback URL.
   * @param {string} params.endpoint - The callback URL which receives the notification.
   * @param {string} [params.description] - A one sentence description of this `Channel`.
   * @param {string[]} [params.severity] - Severity of the notification to be received.
   * @param {boolean} [params.enabled] - Channel is enabled or not. Default is disabled.
   * @param {NotificationChannelAlertSourceItem[]} [params.alertSource] -
   * @param {string} [params.transactionId] - The transaction id for the request in uuid v4 format.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<NotificationsApiV1.Response<NotificationsApiV1.ChannelInfo>>}
   */
  public createNotificationChannel(params: NotificationsApiV1.CreateNotificationChannelParams): Promise<NotificationsApiV1.Response<NotificationsApiV1.ChannelInfo>> {
    const _params = Object.assign({}, params);
    const requiredParams = ['accountId', 'name', 'type', 'endpoint'];

    const missingParams = getMissingParams(_params, requiredParams);
    if (missingParams) {
      return Promise.reject(missingParams);
    }

    const body = {
      'name': _params.name,
      'type': _params.type,
      'endpoint': _params.endpoint,
      'description': _params.description,
      'severity': _params.severity,
      'enabled': _params.enabled,
      'alert_source': _params.alertSource
    };

    const path = {
      'account_id': _params.accountId
    };

    const sdkHeaders = getSdkHeaders(NotificationsApiV1.DEFAULT_SERVICE_NAME, 'v1', 'createNotificationChannel');

    const parameters = {
      options: {
        url: '/v1/{account_id}/notifications/channels',
        method: 'POST',
        body,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(true, sdkHeaders, {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Transaction-Id': _params.transactionId
        }, _params.headers),
      }),
    };

    return this.createRequest(parameters);
  };

  /**
   * bulk delete of channels.
   *
   * bulk delete of channels.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.accountId - Account ID.
   * @param {string[]} params.requestBody - Body for bulk delete notification channels.
   * @param {string} [params.transactionId] - The transaction id for the request in uuid v4 format.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<NotificationsApiV1.Response<NotificationsApiV1.ChannelsDelete>>}
   */
  public deleteNotificationChannels(params: NotificationsApiV1.DeleteNotificationChannelsParams): Promise<NotificationsApiV1.Response<NotificationsApiV1.ChannelsDelete>> {
    const _params = Object.assign({}, params);
    const requiredParams = ['accountId', 'body'];

    const missingParams = getMissingParams(_params, requiredParams);
    if (missingParams) {
      return Promise.reject(missingParams);
    }

    const body = _params.body;
    const path = {
      'account_id': _params.accountId
    };

    const sdkHeaders = getSdkHeaders(NotificationsApiV1.DEFAULT_SERVICE_NAME, 'v1', 'deleteNotificationChannels');

    const parameters = {
      options: {
        url: '/v1/{account_id}/notifications/channels',
        method: 'DELETE',
        body,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(true, sdkHeaders, {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Transaction-Id': _params.transactionId
        }, _params.headers),
      }),
    };

    return this.createRequest(parameters);
  };

  /**
   * delete the details of a specific channel.
   *
   * delete the details of a specific channel.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.accountId - Account ID.
   * @param {string} params.channelId - Channel ID.
   * @param {string} [params.transactionId] - The transaction id for the request in uuid v4 format.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<NotificationsApiV1.Response<NotificationsApiV1.ChannelDelete>>}
   */
  public deleteNotificationChannel(params: NotificationsApiV1.DeleteNotificationChannelParams): Promise<NotificationsApiV1.Response<NotificationsApiV1.ChannelDelete>> {
    const _params = Object.assign({}, params);
    const requiredParams = ['accountId', 'channelId'];

    const missingParams = getMissingParams(_params, requiredParams);
    if (missingParams) {
      return Promise.reject(missingParams);
    }

    const path = {
      'account_id': _params.accountId,
      'channel_id': _params.channelId
    };

    const sdkHeaders = getSdkHeaders(NotificationsApiV1.DEFAULT_SERVICE_NAME, 'v1', 'deleteNotificationChannel');

    const parameters = {
      options: {
        url: '/v1/{account_id}/notifications/channels/{channel_id}',
        method: 'DELETE',
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(true, sdkHeaders, {
          'Accept': 'application/json',
          'Transaction-Id': _params.transactionId
        }, _params.headers),
      }),
    };

    return this.createRequest(parameters);
  };

  /**
   * get the details of a specific channel.
   *
   * get the details of a specific channel.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.accountId - Account ID.
   * @param {string} params.channelId - Channel ID.
   * @param {string} [params.transactionId] - The transaction id for the request in uuid v4 format.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<NotificationsApiV1.Response<NotificationsApiV1.ChannelGet>>}
   */
  public getNotificationChannel(params: NotificationsApiV1.GetNotificationChannelParams): Promise<NotificationsApiV1.Response<NotificationsApiV1.ChannelGet>> {
    const _params = Object.assign({}, params);
    const requiredParams = ['accountId', 'channelId'];

    const missingParams = getMissingParams(_params, requiredParams);
    if (missingParams) {
      return Promise.reject(missingParams);
    }

    const path = {
      'account_id': _params.accountId,
      'channel_id': _params.channelId
    };

    const sdkHeaders = getSdkHeaders(NotificationsApiV1.DEFAULT_SERVICE_NAME, 'v1', 'getNotificationChannel');

    const parameters = {
      options: {
        url: '/v1/{account_id}/notifications/channels/{channel_id}',
        method: 'GET',
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(true, sdkHeaders, {
          'Accept': 'application/json',
          'Transaction-Id': _params.transactionId
        }, _params.headers),
      }),
    };

    return this.createRequest(parameters);
  };

  /**
   * update notification channel.
   *
   * update notification channel.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.accountId - Account ID.
   * @param {string} params.channelId - Channel ID.
   * @param {string} params.name -
   * @param {string} params.type - Type of callback URL.
   * @param {string} params.endpoint - The callback URL which receives the notification.
   * @param {string} [params.description] - A one sentence description of this `Channel`.
   * @param {string[]} [params.severity] - Severity of the notification to be received.
   * @param {boolean} [params.enabled] - Channel is enabled or not. Default is disabled.
   * @param {NotificationChannelAlertSourceItem[]} [params.alertSource] -
   * @param {string} [params.transactionId] - The transaction id for the request in uuid v4 format.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<NotificationsApiV1.Response<NotificationsApiV1.ChannelInfo>>}
   */
  public updateNotificationChannel(params: NotificationsApiV1.UpdateNotificationChannelParams): Promise<NotificationsApiV1.Response<NotificationsApiV1.ChannelInfo>> {
    const _params = Object.assign({}, params);
    const requiredParams = ['accountId', 'channelId', 'name', 'type', 'endpoint'];

    const missingParams = getMissingParams(_params, requiredParams);
    if (missingParams) {
      return Promise.reject(missingParams);
    }

    const body = {
      'name': _params.name,
      'type': _params.type,
      'endpoint': _params.endpoint,
      'description': _params.description,
      'severity': _params.severity,
      'enabled': _params.enabled,
      'alert_source': _params.alertSource
    };

    const path = {
      'account_id': _params.accountId,
      'channel_id': _params.channelId
    };

    const sdkHeaders = getSdkHeaders(NotificationsApiV1.DEFAULT_SERVICE_NAME, 'v1', 'updateNotificationChannel');

    const parameters = {
      options: {
        url: '/v1/{account_id}/notifications/channels/{channel_id}',
        method: 'PUT',
        body,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(true, sdkHeaders, {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Transaction-Id': _params.transactionId
        }, _params.headers),
      }),
    };

    return this.createRequest(parameters);
  };

  /**
   * test notification channel.
   *
   * test a nofication channel under this account.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.accountId - Account ID.
   * @param {string} params.channelId - Channel ID.
   * @param {string} [params.transactionId] - The transaction id for the request in uuid v4 format.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<NotificationsApiV1.Response<NotificationsApiV1.TestChannel>>}
   */
  public testNotificationChannel(params: NotificationsApiV1.TestNotificationChannelParams): Promise<NotificationsApiV1.Response<NotificationsApiV1.TestChannel>> {
    const _params = Object.assign({}, params);
    const requiredParams = ['accountId', 'channelId'];

    const missingParams = getMissingParams(_params, requiredParams);
    if (missingParams) {
      return Promise.reject(missingParams);
    }

    const path = {
      'account_id': _params.accountId,
      'channel_id': _params.channelId
    };

    const sdkHeaders = getSdkHeaders(NotificationsApiV1.DEFAULT_SERVICE_NAME, 'v1', 'testNotificationChannel');

    const parameters = {
      options: {
        url: '/v1/{account_id}/notifications/channels/{channel_id}/test',
        method: 'GET',
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(true, sdkHeaders, {
          'Accept': 'application/json',
          'Transaction-Id': _params.transactionId
        }, _params.headers),
      }),
    };

    return this.createRequest(parameters);
  };

  /**
   * fetch notifications public key.
   *
   * fetch public key to decrypt messages in notification payload.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.accountId - Account ID.
   * @param {string} [params.transactionId] - The transaction id for the request in uuid v4 format.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<NotificationsApiV1.Response<NotificationsApiV1.PublicKeyGet>>}
   */
  public getPublicKey(params: NotificationsApiV1.GetPublicKeyParams): Promise<NotificationsApiV1.Response<NotificationsApiV1.PublicKeyGet>> {
    const _params = Object.assign({}, params);
    const requiredParams = ['accountId'];

    const missingParams = getMissingParams(_params, requiredParams);
    if (missingParams) {
      return Promise.reject(missingParams);
    }

    const path = {
      'account_id': _params.accountId
    };

    const sdkHeaders = getSdkHeaders(NotificationsApiV1.DEFAULT_SERVICE_NAME, 'v1', 'getPublicKey');

    const parameters = {
      options: {
        url: '/v1/{account_id}/notifications/public_key',
        method: 'GET',
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(true, sdkHeaders, {
          'Accept': 'application/json',
          'Transaction-Id': _params.transactionId
        }, _params.headers),
      }),
    };

    return this.createRequest(parameters);
  };

}

/*************************
 * interfaces
 ************************/

namespace NotificationsApiV1 {

  /** An operation response. */
  export interface Response<T = any>  {
    result: T;
    status: number;
    statusText: string;
    headers: IncomingHttpHeaders;
  }

  /** The callback for a service request. */
  export type Callback<T> = (error: any, response?: Response<T>) => void;

  /** The body of a service request that returns no response data. */
  export interface Empty { }

  /** A standard JS object, defined to avoid the limitations of `Object` and `object` */
  export interface JsonObject {
    [key: string]: any;
  }

  /*************************
   * request interfaces
   ************************/

  /** Parameters for the `listAllChannels` operation. */
  export interface ListAllChannelsParams {
    /** Account ID. */
    accountId: string;
    /** The transaction id for the request in uuid v4 format. */
    transactionId?: string;
    /** Limit the number of the returned documents to the specified number. */
    limit?: number;
    /** The offset is the index of the item from which you want to start returning data from. Default is 0. */
    skip?: number;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `createNotificationChannel` operation. */
  export interface CreateNotificationChannelParams {
    /** Account ID. */
    accountId: string;
    name: string;
    /** Type of callback URL. */
    type: CreateNotificationChannelConstants.Type | string;
    /** The callback URL which receives the notification. */
    endpoint: string;
    /** A one sentence description of this `Channel`. */
    description?: string;
    /** Severity of the notification to be received. */
    severity?: CreateNotificationChannelConstants.Severity | string[];
    /** Channel is enabled or not. Default is disabled. */
    enabled?: boolean;
    alertSource?: NotificationChannelAlertSourceItem[];
    /** The transaction id for the request in uuid v4 format. */
    transactionId?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Constants for the `createNotificationChannel` operation. */
  export namespace CreateNotificationChannelConstants {
    /** Type of callback URL. */
    export enum Type {
      WEBHOOK = 'Webhook',
    }
    /** Severity */
    export enum Severity {
      LOW = 'low',
      MEDIUM = 'medium',
      HIGH = 'high',
      CRITICAL = 'critical',
    }
  }

  /** Parameters for the `deleteNotificationChannels` operation. */
  export interface DeleteNotificationChannelsParams {
    /** Account ID. */
    accountId: string;
    /** Body for bulk delete notification channels. */
    body: string[];
    /** The transaction id for the request in uuid v4 format. */
    transactionId?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `deleteNotificationChannel` operation. */
  export interface DeleteNotificationChannelParams {
    /** Account ID. */
    accountId: string;
    /** Channel ID. */
    channelId: string;
    /** The transaction id for the request in uuid v4 format. */
    transactionId?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `getNotificationChannel` operation. */
  export interface GetNotificationChannelParams {
    /** Account ID. */
    accountId: string;
    /** Channel ID. */
    channelId: string;
    /** The transaction id for the request in uuid v4 format. */
    transactionId?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `updateNotificationChannel` operation. */
  export interface UpdateNotificationChannelParams {
    /** Account ID. */
    accountId: string;
    /** Channel ID. */
    channelId: string;
    name: string;
    /** Type of callback URL. */
    type: UpdateNotificationChannelConstants.Type | string;
    /** The callback URL which receives the notification. */
    endpoint: string;
    /** A one sentence description of this `Channel`. */
    description?: string;
    /** Severity of the notification to be received. */
    severity?: UpdateNotificationChannelConstants.Severity | string[];
    /** Channel is enabled or not. Default is disabled. */
    enabled?: boolean;
    alertSource?: NotificationChannelAlertSourceItem[];
    /** The transaction id for the request in uuid v4 format. */
    transactionId?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Constants for the `updateNotificationChannel` operation. */
  export namespace UpdateNotificationChannelConstants {
    /** Type of callback URL. */
    export enum Type {
      WEBHOOK = 'Webhook',
    }
    /** Severity */
    export enum Severity {
      LOW = 'low',
      MEDIUM = 'medium',
      HIGH = 'high',
      CRITICAL = 'critical',
    }
  }

  /** Parameters for the `testNotificationChannel` operation. */
  export interface TestNotificationChannelParams {
    /** Account ID. */
    accountId: string;
    /** Channel ID. */
    channelId: string;
    /** The transaction id for the request in uuid v4 format. */
    transactionId?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `getPublicKey` operation. */
  export interface GetPublicKeyParams {
    /** Account ID. */
    accountId: string;
    /** The transaction id for the request in uuid v4 format. */
    transactionId?: string;
    headers?: OutgoingHttpHeaders;
  }

  /*************************
   * model interfaces
   ************************/

  /** The providers that act as alert sources and the potential findings that can be flagged as alerts. */
  export interface ChannelAlertSourceItem {
    /** The providers that you can receive alerts for. To view your available providers, you can call the
     *  /v1/{account_id}/providers endpoint of the Findings API.
     */
    provider_name?: string;
    /** The types of findings for each provider that you want to receive alerts for. Options are dependent upon the
     *  provider that you select. Depending on that selection, some available options include
     *  `image_with_vulnerabilities`, `anonym_server`, `server_suspected_ratio`, `appid`, `cos`, `expired_cert`, and
     *  `expiring_1day_cert`For a full list of available finding types, see [the docs](/docs/).
     */
    finding_types?: any[];
  }

  /** The returned response when a channel is deleted. */
  export interface ChannelDelete {
    /** The ID of the deleted channel. */
    channel_id?: string;
    /** response message. */
    message?: string;
  }

  /** The returned response when get channel is run. */
  export interface ChannelGet {
    /** Response including channels. */
    channel?: ChannelGetChannel;
  }

  /** Response including channels. */
  export interface ChannelGetChannel {
    /** A unique ID for the channel. */
    channel_id?: string;
    name?: string;
    /** A one sentence description of this `Channel`. */
    description?: string;
    /** Type of callback URL. */
    type?: string;
    /** The severity of the notification. */
    severity?: ChannelGetChannelSeverity;
    /** The callback URL which receives the notification. */
    endpoint?: string;
    /** Whether the channel is enabled. The default is disabled. */
    enabled?: boolean;
    alert_source?: ChannelGetChannelAlertSourceItem[];
    frequency?: string;
  }

  /** The providers that act as alert sources and the potential findings that can be flagged as alerts. */
  export interface ChannelGetChannelAlertSourceItem {
    /** The providers that you can receive alerts for. To view your available providers, you can call the
     *  /v1/{account_id}/providers endpoint of the Findings API.
     */
    provider_name?: string;
    /** The types of findings for each provider that you want to receive alerts for. Options are dependent upon the
     *  provider that you select. Depending on that selection, some available options include
     *  `image_with_vulnerabilities`, `anonym_server`, `server_suspected_ratio`, `appid`, `cos`, `expired_cert`, and
     *  `expiring_1day_cert`For a full list of available finding types, see [the docs](/docs/).
     */
    finding_types?: any[];
  }

  /** The severity of the notification. */
  export interface ChannelGetChannelSeverity {
    /** Critical severity. */
    critical?: boolean;
    /** High severity. */
    high?: boolean;
    /** Medium severity. */
    medium?: boolean;
    /** Low severity. */
    low?: boolean;
  }

  /** The returned response when a channel is created or updated. */
  export interface ChannelInfo {
    /** The ID of the created channel. */
    channel_id?: string;
    /** response code. */
    status_code?: number;
  }

  /** The severity of the notification. */
  export interface ChannelSeverity {
    /** Critical severity. */
    critical?: boolean;
    /** High severity. */
    high?: boolean;
    /** Medium severity. */
    medium?: boolean;
    /** Low severity. */
    low?: boolean;
  }

  /** The returned response when more than one channel is deleted. */
  export interface ChannelsDelete {
    /** response message. */
    message?: string;
  }

  /** Available channels in your account are listed. */
  export interface ChannelsList {
    channels?: Channel[];
  }

  /** The alert sources. They identify the providers and their finding types which makes the findings available to Security Advisor. */
  export interface NotificationChannelAlertSourceItem {
    /** Below is a list of builtin providers that you can select in addition to the ones you obtain by calling
     *  Findings API /v1/{account_id}/providers :
     *   | provider_name | The source they represent |
     *   |-----|-----|
     *   | VA  | Vulnerable image findings|
     *   | NA  | Network Insights findings|
     *   | ATA | Activity Insights findings|
     *   | CERT | Certificate Manager findings|
     *   | ALL | Special provider name to represent all the providers. Its mutually exclusive with other providers
     *  meaning either you choose ALL or you don't|.
     */
    provider_name: string;
    /** An array of the finding types of the provider_name or "ALL" to specify all finding types under that provider
     *  Below is a list of supported finding types for each built in providers
     *  | provider_name | Supported finding types |
     *  |-----|-----|
     *  | VA  | "image_with_vulnerabilities", "image_with_config_issues"|
     *  | NA  | "anonym_server", "malware_server", "bot_server", "miner_server", "server_suspected_ratio",
     *  "server_response", "data_extrusion", "server_weaponized_total"|
     *  | ATA | "appid", "cos", "iks", "iam", "kms", "cert", "account", "app"|
     *  | CERT | "expired_cert", "expiring_1day_cert", "expiring_10day_cert", "expiring_30day_cert",
     *  "expiring_60day_cert", "expiring_90day_cert"|
     *  | ALL | "ALL"|.
     */
    finding_types?: string[];
  }

  /** PublicKeyGet. */
  export interface PublicKeyGet {
    public_key: string;
  }

  /** The returned response when a webhook is tested for a channel. */
  export interface TestChannel {
    /** response status. */
    test?: string;
  }

  /** Response including channels. */
  export interface Channel {
    /** A unique ID for the channel. */
    channel_id?: string;
    name?: string;
    /** A one sentence description of this `Channel`. */
    description?: string;
    /** Type of callback URL. */
    type?: string;
    /** The severity of the notification. */
    severity?: ChannelSeverity;
    /** The callback URL which receives the notification. */
    endpoint?: string;
    /** Whether the channel is enabled. The default is disabled. */
    enabled?: boolean;
    alert_source?: ChannelAlertSourceItem[];
    frequency?: string;
  }

}

export = NotificationsApiV1;
