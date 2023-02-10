import request from '@/utils/request'

export function fetchMasterData(data) {
  return request({
    url: '/master-data',
    method: 'get',
    data,
    isAlertMessage: false,
    isParams: true,
  })
}

export function uploadImage(data) {
  const formData = new FormData()

  formData.append('type', data.type)
  formData.append('image', data.image)

  return request({
    url: '/upload-image',
    method: 'post',
    data: formData,
    isAlertMessage: false,
  })
}
