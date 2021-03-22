export const getDummyNewLabel = () => ({
  id: 123456789,
  name: 'feature request',
  color: '#001122',
  description: 'Indicates a new feature request',
  originalName: '',
  originalDescription: '',
  originalColor: '',
  action: 'create',
  validation: 'valid',
});

export const getDummyLabelCreationSuccessResponse = () => ({
  id: 208045946,
  node_id: 'MDU6TGFiZWwyMDgwNDU5NDY=',
  url: 'https://api.github.com/repos/octocat/Hello-World/labels/bug',
  name: 'bug',
  description: "Something isn't working",
  color: '001122',
  default: true,
});
