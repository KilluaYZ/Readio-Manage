import request from '@/utils/request'

//获取文件信息
export function getFileInfo(params) {
    return request({
      url: '/file/getResInfo',
      method: 'get',
      params: params
    })
  }