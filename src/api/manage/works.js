import request from '@/utils/request'

//获取系列信息
export function getSeriesBrief(params) {
    return request({
      url: '/works/getSeriesBrief',
      method: 'get',
      params: params
    })
}