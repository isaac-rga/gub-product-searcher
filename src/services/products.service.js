import { httpWrapper } from '../helpers/httpWrapper';

function salesChannelsAvailable() {
  return httpWrapper
    .get('/sales_channels/available')
    .then(channels => {
      return channels;
    })
    .catch(error => error);
}

function products() {
  return httpWrapper
    .get('products')
    .then(products => {
      return products;
    })
    .catch(error => error);
}
function salesChannelsShow(id) {
  return httpWrapper
    .get(`sales_channels/${id}`)
    .then(channel => {
      return channel;
    })
    .catch(error => error);
}
function salesChannelsUpdate(id, values) {
  return httpWrapper
    .put(`sales_channels/${id}`, { sales_channel: values })
    .then(channel => {
      return channel;
    })
    .catch(error => error);
}
function salesChannelsTest(id) {
  return httpWrapper
    .get(`sales_channels/${id}/test`)
    .then(response => {
      return response;
    })
    .catch(error => error);
}
function salesChannelsDelete(id) {
  return httpWrapper
    .delete(`sales_channels/${id}`)
    .then(response => {
      return response;
    })
    .catch(error => error);
}
function connectChannels(values) {
  return httpWrapper
    .post('sales_channels/connect/', {
      sales_channel: {
        provider: values.provider,
        shop: values.shop,
      },
    })
    .then(url => {
      return url;
    })
    .catch(error => error);
}

export const ProductsService = {
  products: products,
  sales_channels_show: salesChannelsShow,
  sales_channels_update: salesChannelsUpdate,
  sales_channels_test: salesChannelsTest,
  connect_channels: connectChannels,
  sales_channels_available: salesChannelsAvailable,
  sales_channels_delete: salesChannelsDelete,
};
