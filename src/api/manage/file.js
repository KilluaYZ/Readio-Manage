import request from '@/utils/request'
// import { resolve } from 'core-js/fn/promise'

//获取文件信息
export function getFileInfo(params) {
    return request({
      url: '/file/getResInfo',
      method: 'get',
      params: params
    })
  }

//获取文件二进制
export function getFileBinaryById(params) {
  return request({
    url: '/file/getFileBinaryById',
    method: 'get',
    params: params,
    responseType: 'blob'
  })
}

//获取图片url
export function getImgUrl(params, id) {
  return getFileBinaryById(params).then((res) => {
    const imgUrl = window.URL.createObjectURL(new window.Blob([res]), {type: 'image/'+params.fileType})
    
    
  })
}