import {
	ICredentialType,
	INodeProperties,
	IHttpRequestOptions,
	ICredentialTestRequest,
	ICredentialDataDecryptedObject,
} from 'n8n-workflow';

export class FrameIoApi implements ICredentialType {
	name = 'frameIoApi';
	displayName = 'Frame.io API';
	documentationUrl = 'https://developer.adobe.com/frameio/api/current/';
	icon = 'file:frameio.svg';
	
	extends = ['oAuth2Api'];
	
	properties: INodeProperties[] = [
		{
			displayName: 'Grant Type',
			name: 'grantType',
			type: 'hidden',
			default: 'authorizationCode',
		},
		{
			displayName: 'Client ID',
			name: 'clientId',
			type: 'string',
			default: '',
			required: true,
			description: 'The Client ID from your Adobe Developer Console Frame.io integration',
		},
		{
			displayName: 'Client Secret',
			name: 'clientSecret',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			required: true,
			description: 'The Client Secret from your Adobe Developer Console Frame.io integration',
		},
		{
			displayName: 'Authorization URL',
			name: 'authUrl',
			type: 'string',
			default: 'https://auth.frame.io/oauth/authorize',
			required: true,
			description: 'Adobe IMS authorization URL for Frame.io',
		},
		{
			displayName: 'Access Token URL',
			name: 'accessTokenUrl',
			type: 'string',
			typeOptions: { password: true },
			default: 'https://auth.frame.io/oauth/token',
			required: true,
			description: 'Adobe IMS token exchange URL for Frame.io',
		},
		{
			displayName: 'Scope',
			name: 'scope',
			type: 'string',
			default: 'account.read asset.create asset.read asset.update asset.delete comment.create comment.read comment.update comment.delete project.create project.read project.update project.delete share.create share.read share.update share.delete workspace.create workspace.read workspace.update workspace.delete',
			description: 'Space-separated list of Frame.io API scopes',
		},
		{
			displayName: 'Auth URI Query Parameters',
			name: 'authQueryParameters',
			type: 'hidden',
			default: 'response_type=code&access_type=offline',
		},
		{
			displayName: 'Authentication',
			name: 'authentication',
			type: 'hidden',
			default: 'body',
		},
		{
			displayName: 'Base URL',
			name: 'baseUrl',
			type: 'string',
			default: 'https://api.frame.io',
			description: 'The base URL for Frame.io API',
		},
		{
			displayName: 'API Version',
			name: 'apiVersion',
			type: 'options',
			options: [
				{
					name: 'V4 (Stable)',
					value: '4.0',
				},
			],
			default: '4.0',
			description: 'Frame.io API version to use',
		},
	];

	async authenticate(
		credentials: ICredentialDataDecryptedObject,
		requestOptions: IHttpRequestOptions,
	): Promise<IHttpRequestOptions> {
		// Add Frame.io specific headers
		if (!requestOptions.headers) {
			requestOptions.headers = {};
		}
		
		requestOptions.headers['api-version'] = credentials.apiVersion as string || '4.0';
		requestOptions.headers['Content-Type'] = 'application/json';
		const oauthData = credentials.oauthTokenData as any;
		const accessToken = oauthData?.access_token || credentials.accessToken;
		requestOptions.headers['Authorization'] = `Bearer ${accessToken}`;

		return requestOptions;
	}

	test: ICredentialTestRequest = {
		request: {
			baseURL: '={{$credentials.baseUrl}}',
			url: '/v4/me',
			method: 'GET',
		},
	};
}