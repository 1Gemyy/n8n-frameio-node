import {
	IExecuteFunctions,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
	IHttpRequestOptions,
	NodeOperationError,
} from 'n8n-workflow';

export class FrameIo implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Frame.io',
		name: 'frameIo',
		icon: 'file:frameio.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Interact with Frame.io API for video collaboration and asset management',
		defaults: {
			name: 'Frame.io',
		},
		inputs: ['main'],
		outputs: ['main'],
		credentials: [
			{
				name: 'frameIoApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{$credentials.baseUrl}}/v4',
			headers: {
				Accept: 'application/json',
			},
		},
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Account',
						value: 'account',
					},
					{
						name: 'Asset',
						value: 'asset',
					},
					{
						name: 'Comment',
						value: 'comment',
					},
					{
						name: 'Project',
						value: 'project',
					},
					{
						name: 'Share',
						value: 'share',
					},
					{
						name: 'User',
						value: 'user',
					},
					{
						name: 'Workspace',
						value: 'workspace',
					},
				],
				default: 'project',
			},

			// Account Operations
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
					show: {
						resource: ['account'],
					},
				},
				options: [
					{
						name: 'Get Many',
						value: 'getAll',
						description: 'Get many accounts',
						action: 'Get many accounts',
					},
					{
						name: 'Get Current User',
						value: 'getCurrentUser',
						description: 'Get current user details',
						action: 'Get current user',
					},
				],
				default: 'getAll',
			},

			// Project Operations
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
					show: {
						resource: ['project'],
					},
				},
				options: [
					{
						name: 'Create',
						value: 'create',
						description: 'Create a project',
						action: 'Create a project',
					},
					{
						name: 'Delete',
						value: 'delete',
						description: 'Delete a project',
						action: 'Delete a project',
					},
					{
						name: 'Get',
						value: 'get',
						description: 'Get a project',
						action: 'Get a project',
					},
					{
						name: 'Get Many',
						value: 'getAll',
						description: 'Get many projects in workspace',
						action: 'Get many projects',
					},
					{
						name: 'Update',
						value: 'update',
						description: 'Update a project',
						action: 'Update a project',
					},
				],
				default: 'create',
			},

			// Asset Operations
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
					show: {
						resource: ['asset'],
					},
				},
				options: [
					{
						name: 'Delete',
						value: 'delete',
						description: 'Delete a file',
						action: 'Delete a file',
					},
					{
						name: 'Get',
						value: 'get',
						description: 'Get file details',
						action: 'Get a file',
					},
					{
						name: 'Get Children',
						value: 'getChildren',
						description: 'Get folder children',
						action: 'Get folder children',
					},
					{
						name: 'Update',
						value: 'update',
						description: 'Update file details',
						action: 'Update a file',
					},
					{
						name: 'Upload File',
						value: 'uploadFile',
						description: 'Upload a file to Frame.io',
						action: 'Upload a file',
					},
					{
						name: 'Upload From URL',
						value: 'uploadFromUrl',
						description: 'Upload a file from URL',
						action: 'Upload file from URL',
					},
				],
				default: 'uploadFile',
			},

			// Comment Operations
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
					show: {
						resource: ['comment'],
					},
				},
				options: [
					{
						name: 'Create',
						value: 'create',
						description: 'Create a comment',
						action: 'Create a comment',
					},
					{
						name: 'Get',
						value: 'get',
						description: 'Get a comment',
						action: 'Get a comment',
					},
					{
						name: 'Get Many',
						value: 'getAll',
						description: 'Get many comments for a file',
						action: 'Get many comments',
					},
					{
						name: 'Update',
						value: 'update',
						description: 'Update a comment',
						action: 'Update a comment',
					},
					{
						name: 'Delete',
						value: 'delete',
						description: 'Delete a comment',
						action: 'Delete a comment',
					},
				],
				default: 'create',
			},

			// Share Operations
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
					show: {
						resource: ['share'],
					},
				},
				options: [
					{
						name: 'Create',
						value: 'create',
						description: 'Create a share',
						action: 'Create a share',
					},
					{
						name: 'Get',
						value: 'get',
						description: 'Get a share',
						action: 'Get a share',
					},
					{
						name: 'Get Many',
						value: 'getAll',
						description: 'Get many shares for a project',
						action: 'Get many shares',
					},
					{
						name: 'Update',
						value: 'update',
						description: 'Update a share',
						action: 'Update a share',
					},
					{
						name: 'Delete',
						value: 'delete',
						description: 'Delete a share',
						action: 'Delete a share',
					},
				],
				default: 'create',
			},

			// Workspace Operations
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
					show: {
						resource: ['workspace'],
					},
				},
				options: [
					{
						name: 'Create',
						value: 'create',
						description: 'Create a workspace',
						action: 'Create a workspace',
					},
					{
						name: 'Get',
						value: 'get',
						description: 'Get a workspace',
						action: 'Get a workspace',
					},
					{
						name: 'Get Many',
						value: 'getAll',
						description: 'Get many workspaces',
						action: 'Get many workspaces',
					},
					{
						name: 'Update',
						value: 'update',
						description: 'Update a workspace',
						action: 'Update a workspace',
					},
					{
						name: 'Delete',
						value: 'delete',
						description: 'Delete a workspace',
						action: 'Delete a workspace',
					},
				],
				default: 'create',
			},

			// Common Parameters
			{
				displayName: 'Account ID',
				name: 'accountId',
				type: 'string',
				required: true,
				displayOptions: {
					hide: {
						resource: ['account'],
						operation: ['getCurrentUser'],
					},
				},
				default: '',
				placeholder: 'e.g., 12345',
				description: 'The Frame.io account ID',
			},

			// Project Parameters
			{
				displayName: 'Workspace ID',
				name: 'workspaceId',
				type: 'string',
				required: true,
				displayOptions: {
					show: {
						resource: ['project'],
						operation: ['create', 'getAll'],
					},
				},
				default: '',
				placeholder: 'e.g., 67890',
				description: 'The workspace ID to create project in',
			},
			{
				displayName: 'Project ID',
				name: 'projectId',
				type: 'string',
				required: true,
				displayOptions: {
					show: {
						resource: ['project'],
						operation: ['get', 'update', 'delete'],
					},
				},
				default: '',
				placeholder: 'e.g., 11111',
			},
			{
				displayName: 'Project Name',
				name: 'projectName',
				type: 'string',
				required: true,
				displayOptions: {
					show: {
						resource: ['project'],
						operation: ['create', 'update'],
					},
				},
				default: '',
				placeholder: 'My Project',
				description: 'The name of the project',
			},
			{
				displayName: 'Project Description',
				name: 'projectDescription',
				type: 'string',
				displayOptions: {
					show: {
						resource: ['project'],
						operation: ['create', 'update'],
					},
				},
				default: '',
				placeholder: 'Project description',
				description: 'The description of the project',
			},

			// Asset Parameters
			{
				displayName: 'Folder ID',
				name: 'folderId',
				type: 'string',
				required: true,
				displayOptions: {
					show: {
						resource: ['asset'],
						operation: ['uploadFile', 'uploadFromUrl', 'getChildren'],
					},
				},
				default: '',
				placeholder: 'e.g., 22222',
				description: 'The folder ID to upload file to',
			},
			{
				displayName: 'File ID',
				name: 'fileId',
				type: 'string',
				required: true,
				displayOptions: {
					show: {
						resource: ['asset'],
						operation: ['get', 'update', 'delete'],
					},
				},
				default: '',
				placeholder: 'e.g., 33333',
			},
			{
				displayName: 'File Name',
				name: 'fileName',
				type: 'string',
				required: true,
				displayOptions: {
					show: {
						resource: ['asset'],
						operation: ['uploadFile', 'uploadFromUrl'],
					},
				},
				default: '',
				placeholder: 'video.mp4',
				description: 'The name of the file',
			},
			{
				displayName: 'File Size',
				name: 'fileSize',
				type: 'number',
				required: true,
				displayOptions: {
					show: {
						resource: ['asset'],
						operation: ['uploadFile'],
					},
				},
				default: 0,
				description: 'The size of the file in bytes',
			},
			{
				displayName: 'Source URL',
				name: 'sourceUrl',
				type: 'string',
				required: true,
				displayOptions: {
					show: {
						resource: ['asset'],
						operation: ['uploadFromUrl'],
					},
				},
				default: '',
				placeholder: 'https://example.com/video.mp4',
				description: 'The URL of the file to upload',
			},

			// Comment Parameters
			{
				displayName: 'Comment ID',
				name: 'commentId',
				type: 'string',
				required: true,
				displayOptions: {
					show: {
						resource: ['comment'],
						operation: ['get', 'update', 'delete'],
					},
				},
				default: '',
				placeholder: 'e.g., 44444',
			},
			{
				displayName: 'Comment Text',
				name: 'commentText',
				type: 'string',
				required: true,
				displayOptions: {
					show: {
						resource: ['comment'],
						operation: ['create', 'update'],
					},
				},
				default: '',
				placeholder: 'This is a comment',
				description: 'The text of the comment',
			},

			// Share Parameters
			{
				displayName: 'Project ID',
				name: 'projectId',
				type: 'string',
				required: true,
				displayOptions: {
					show: {
						resource: ['share'],
						operation: ['create', 'getAll'],
					},
				},
				default: '',
				placeholder: 'e.g., 11111',
				description: 'The project ID to create share for',
			},
			{
				displayName: 'Share ID',
				name: 'shareId',
				type: 'string',
				required: true,
				displayOptions: {
					show: {
						resource: ['share'],
						operation: ['get', 'update', 'delete'],
					},
				},
				default: '',
				placeholder: 'e.g., 55555',
			},
			{
				displayName: 'Share Name',
				name: 'shareName',
				type: 'string',
				required: true,
				displayOptions: {
					show: {
						resource: ['share'],
						operation: ['create', 'update'],
					},
				},
				default: '',
				placeholder: 'My Share',
				description: 'The name of the share',
			},

			// Workspace Parameters
			{
				displayName: 'Workspace ID',
				name: 'workspaceId',
				type: 'string',
				required: true,
				displayOptions: {
					show: {
						resource: ['workspace'],
						operation: ['get', 'update', 'delete'],
					},
				},
				default: '',
				placeholder: 'e.g., 67890',
			},
			{
				displayName: 'Workspace Name',
				name: 'workspaceName',
				type: 'string',
				required: true,
				displayOptions: {
					show: {
						resource: ['workspace'],
						operation: ['create', 'update'],
					},
				},
				default: '',
				placeholder: 'My Workspace',
				description: 'The name of the workspace',
			},

			// Additional Options
			{
				displayName: 'Additional Fields',
				name: 'additionalFields',
				type: 'collection',
				placeholder: 'Add Field',
				default: {},
				options: [
					{
						displayName: 'Include Metadata',
						name: 'includeMetadata',
						type: 'boolean',
						default: false,
						description: 'Whether to include metadata in the response',
					},
					{
						displayName: 'Page Size',
						name: 'pageSize',
						type: 'number',
						default: 50,
						description: 'Number of items per page',
					},
					{
						displayName: 'Include Total Count',
						name: 'includeTotalCount',
						type: 'boolean',
						default: false,
						description: 'Whether to include total count in paginated responses',
					},
				],
			},
		],
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const items = this.getInputData();
		const returnData: INodeExecutionData[] = [];

		const resource = this.getNodeParameter('resource', 0) as string;
		const operation = this.getNodeParameter('operation', 0) as string;

		for (let i = 0; i < items.length; i++) {
			try {
				let responseData;
				const accountId = this.getNodeParameter('accountId', i, '') as string;
				const additionalFields = this.getNodeParameter('additionalFields', i, {}) as any;

				if (resource === 'account') {
					if (operation === 'getAll') {
						const options: IHttpRequestOptions = {
							method: 'GET',
							url: '/accounts',
						};
						responseData = await this.helpers.httpRequestWithAuthentication.call(this, 'frameIoApi', options);
					} else if (operation === 'getCurrentUser') {
						const options: IHttpRequestOptions = {
							method: 'GET',
							url: '/me',
						};
						responseData = await this.helpers.httpRequestWithAuthentication.call(this, 'frameIoApi', options);
					}
				} else if (resource === 'project') {
					if (operation === 'create') {
						const workspaceId = this.getNodeParameter('workspaceId', i) as string;
						const projectName = this.getNodeParameter('projectName', i) as string;
						const projectDescription = this.getNodeParameter('projectDescription', i, '') as string;

						const body = {
							data: {
								name: projectName,
								...(projectDescription && { description: projectDescription }),
							},
						};

						const options: IHttpRequestOptions = {
							method: 'POST',
							url: `/accounts/${accountId}/workspaces/${workspaceId}/projects`,
							body,
						};
						responseData = await this.helpers.httpRequestWithAuthentication.call(this, 'frameIoApi', options);
					} else if (operation === 'get') {
						const projectId = this.getNodeParameter('projectId', i) as string;

						const options: IHttpRequestOptions = {
							method: 'GET',
							url: `/accounts/${accountId}/projects/${projectId}`,
						};
						responseData = await this.helpers.httpRequestWithAuthentication.call(this, 'frameIoApi', options);
					} else if (operation === 'getAll') {
						const workspaceId = this.getNodeParameter('workspaceId', i) as string;
						const qs: any = {};

						if (additionalFields.pageSize) {
							qs.page_size = additionalFields.pageSize;
						}
						if (additionalFields.includeTotalCount) {
							qs.include_total_count = additionalFields.includeTotalCount;
						}

						const options: IHttpRequestOptions = {
							method: 'GET',
							url: `/accounts/${accountId}/workspaces/${workspaceId}/projects`,
							qs,
						};
						responseData = await this.helpers.httpRequestWithAuthentication.call(this, 'frameIoApi', options);
					} else if (operation === 'update') {
						const projectId = this.getNodeParameter('projectId', i) as string;
						const projectName = this.getNodeParameter('projectName', i) as string;
						const projectDescription = this.getNodeParameter('projectDescription', i, '') as string;

						const body = {
							data: {
								name: projectName,
								...(projectDescription && { description: projectDescription }),
							},
						};

						const options: IHttpRequestOptions = {
							method: 'PATCH',
							url: `/accounts/${accountId}/projects/${projectId}`,
							body,
						};
						responseData = await this.helpers.httpRequestWithAuthentication.call(this, 'frameIoApi', options);
					} else if (operation === 'delete') {
						const projectId = this.getNodeParameter('projectId', i) as string;

						const options: IHttpRequestOptions = {
							method: 'DELETE',
							url: `/accounts/${accountId}/projects/${projectId}`,
						};
						responseData = await this.helpers.httpRequestWithAuthentication.call(this, 'frameIoApi', options);
					}
				} else if (resource === 'asset') {
					if (operation === 'uploadFile') {
						const folderId = this.getNodeParameter('folderId', i) as string;
						const fileName = this.getNodeParameter('fileName', i) as string;
						const fileSize = this.getNodeParameter('fileSize', i) as number;

						const body = {
							data: {
								name: fileName,
								file_size: fileSize,
							},
						};

						const options: IHttpRequestOptions = {
							method: 'POST',
							url: `/accounts/${accountId}/folders/${folderId}/files/local_upload`,
							body,
						};
						responseData = await this.helpers.httpRequestWithAuthentication.call(this, 'frameIoApi', options);
					} else if (operation === 'uploadFromUrl') {
						const folderId = this.getNodeParameter('folderId', i) as string;
						const fileName = this.getNodeParameter('fileName', i) as string;
						const sourceUrl = this.getNodeParameter('sourceUrl', i) as string;

						const body = {
							data: {
								name: fileName,
								source_url: sourceUrl,
							},
						};

						const options: IHttpRequestOptions = {
							method: 'POST',
							url: `/accounts/${accountId}/folders/${folderId}/files/remote_upload`,
							body,
						};
						responseData = await this.helpers.httpRequestWithAuthentication.call(this, 'frameIoApi', options);
					} else if (operation === 'get') {
						const fileId = this.getNodeParameter('fileId', i) as string;
						let url = `/accounts/${accountId}/files/${fileId}`;

						if (additionalFields.includeMetadata) {
							url += '/metadata';
						}

						const options: IHttpRequestOptions = {
							method: 'GET',
							url,
						};
						responseData = await this.helpers.httpRequestWithAuthentication.call(this, 'frameIoApi', options);
					} else if (operation === 'getChildren') {
						const folderId = this.getNodeParameter('folderId', i) as string;
						let url = `/accounts/${accountId}/folders/${folderId}/children`;

						if (additionalFields.includeMetadata) {
							url += '/metadata';
						}

						const options: IHttpRequestOptions = {
							method: 'GET',
							url,
						};
						responseData = await this.helpers.httpRequestWithAuthentication.call(this, 'frameIoApi', options);
					} else if (operation === 'update') {
						const fileId = this.getNodeParameter('fileId', i) as string;
						const fileName = this.getNodeParameter('fileName', i) as string;

						const body = {
							data: {
								name: fileName,
							},
						};

						const options: IHttpRequestOptions = {
							method: 'PATCH',
							url: `/accounts/${accountId}/files/${fileId}`,
							body,
						};
						responseData = await this.helpers.httpRequestWithAuthentication.call(this, 'frameIoApi', options);
					} else if (operation === 'delete') {
						const fileId = this.getNodeParameter('fileId', i) as string;

						const options: IHttpRequestOptions = {
							method: 'DELETE',
							url: `/accounts/${accountId}/files/${fileId}`,
						};
						responseData = await this.helpers.httpRequestWithAuthentication.call(this, 'frameIoApi', options);
					}
				} else if (resource === 'comment') {
					if (operation === 'create') {
						const fileId = this.getNodeParameter('fileId', i) as string;
						const commentText = this.getNodeParameter('commentText', i) as string;

						const body = {
							data: {
								text: commentText,
							},
						};

						const options: IHttpRequestOptions = {
							method: 'POST',
							url: `/accounts/${accountId}/files/${fileId}/comments`,
							body,
						};
						responseData = await this.helpers.httpRequestWithAuthentication.call(this, 'frameIoApi', options);
					} else if (operation === 'get') {
						const commentId = this.getNodeParameter('commentId', i) as string;

						const options: IHttpRequestOptions = {
							method: 'GET',
							url: `/accounts/${accountId}/comments/${commentId}`,
						};
						responseData = await this.helpers.httpRequestWithAuthentication.call(this, 'frameIoApi', options);
					} else if (operation === 'getAll') {
						const fileId = this.getNodeParameter('fileId', i) as string;

						const options: IHttpRequestOptions = {
							method: 'GET',
							url: `/accounts/${accountId}/files/${fileId}/comments`,
						};
						responseData = await this.helpers.httpRequestWithAuthentication.call(this, 'frameIoApi', options);
					} else if (operation === 'update') {
						const commentId = this.getNodeParameter('commentId', i) as string;
						const commentText = this.getNodeParameter('commentText', i) as string;

						const body = {
							data: {
								text: commentText,
							},
						};

						const options: IHttpRequestOptions = {
							method: 'PATCH',
							url: `/accounts/${accountId}/comments/${commentId}`,
							body,
						};
						responseData = await this.helpers.httpRequestWithAuthentication.call(this, 'frameIoApi', options);
					} else if (operation === 'delete') {
						const commentId = this.getNodeParameter('commentId', i) as string;

						const options: IHttpRequestOptions = {
							method: 'DELETE',
							url: `/accounts/${accountId}/comments/${commentId}`,
						};
						responseData = await this.helpers.httpRequestWithAuthentication.call(this, 'frameIoApi', options);
					}
				} else if (resource === 'share') {
					if (operation === 'create') {
						const projectId = this.getNodeParameter('projectId', i) as string;
						const shareName = this.getNodeParameter('shareName', i) as string;

						const body = {
							data: {
								name: shareName,
							},
						};

						const options: IHttpRequestOptions = {
							method: 'POST',
							url: `/accounts/${accountId}/projects/${projectId}/shares`,
							body,
						};
						responseData = await this.helpers.httpRequestWithAuthentication.call(this, 'frameIoApi', options);
					} else if (operation === 'get') {
						const shareId = this.getNodeParameter('shareId', i) as string;

						const options: IHttpRequestOptions = {
							method: 'GET',
							url: `/accounts/${accountId}/shares/${shareId}`,
						};
						responseData = await this.helpers.httpRequestWithAuthentication.call(this, 'frameIoApi', options);
					} else if (operation === 'getAll') {
						const projectId = this.getNodeParameter('projectId', i) as string;

						const options: IHttpRequestOptions = {
							method: 'GET',
							url: `/accounts/${accountId}/projects/${projectId}/shares`,
						};
						responseData = await this.helpers.httpRequestWithAuthentication.call(this, 'frameIoApi', options);
					} else if (operation === 'update') {
						const shareId = this.getNodeParameter('shareId', i) as string;
						const shareName = this.getNodeParameter('shareName', i) as string;

						const body = {
							data: {
								name: shareName,
							},
						};

						const options: IHttpRequestOptions = {
							method: 'PATCH',
							url: `/accounts/${accountId}/shares/${shareId}`,
							body,
						};
						responseData = await this.helpers.httpRequestWithAuthentication.call(this, 'frameIoApi', options);
					} else if (operation === 'delete') {
						const shareId = this.getNodeParameter('shareId', i) as string;

						const options: IHttpRequestOptions = {
							method: 'DELETE',
							url: `/accounts/${accountId}/shares/${shareId}`,
						};
						responseData = await this.helpers.httpRequestWithAuthentication.call(this, 'frameIoApi', options);
					}
				} else if (resource === 'workspace') {
					if (operation === 'create') {
						const workspaceName = this.getNodeParameter('workspaceName', i) as string;

						const body = {
							data: {
								name: workspaceName,
							},
						};

						const options: IHttpRequestOptions = {
							method: 'POST',
							url: `/accounts/${accountId}/workspaces`,
							body,
						};
						responseData = await this.helpers.httpRequestWithAuthentication.call(this, 'frameIoApi', options);
					} else if (operation === 'get') {
						const workspaceId = this.getNodeParameter('workspaceId', i) as string;

						const options: IHttpRequestOptions = {
							method: 'GET',
							url: `/accounts/${accountId}/workspaces/${workspaceId}`,
						};
						responseData = await this.helpers.httpRequestWithAuthentication.call(this, 'frameIoApi', options);
					} else if (operation === 'getAll') {
						const options: IHttpRequestOptions = {
							method: 'GET',
							url: `/accounts/${accountId}/workspaces`,
						};
						responseData = await this.helpers.httpRequestWithAuthentication.call(this, 'frameIoApi', options);
					} else if (operation === 'update') {
						const workspaceId = this.getNodeParameter('workspaceId', i) as string;
						const workspaceName = this.getNodeParameter('workspaceName', i) as string;

						const body = {
							data: {
								name: workspaceName,
							},
						};

						const options: IHttpRequestOptions = {
							method: 'PATCH',
							url: `/accounts/${accountId}/workspaces/${workspaceId}`,
							body,
						};
						responseData = await this.helpers.httpRequestWithAuthentication.call(this, 'frameIoApi', options);
					} else if (operation === 'delete') {
						const workspaceId = this.getNodeParameter('workspaceId', i) as string;

						const options: IHttpRequestOptions = {
							method: 'DELETE',
							url: `/accounts/${accountId}/workspaces/${workspaceId}`,
						};
						responseData = await this.helpers.httpRequestWithAuthentication.call(this, 'frameIoApi', options);
					}
				}

				returnData.push({
					json: responseData,
					pairedItem: { item: i },
				});
			} catch (error) {
				if (this.continueOnFail()) {
					returnData.push({
						json: {
							error: error.message,
						},
						pairedItem: { item: i },
					});
					continue;
				}
				throw new NodeOperationError(this.getNode(), error, {
					itemIndex: i,
				});
			}
		}

		return [returnData];
	}
}