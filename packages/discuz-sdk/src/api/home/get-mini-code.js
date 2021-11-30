import { handleError } from '../utils/handle-error';
import request from '../_example';
/**
 * 入参验证规则，具体配置请看：https://github.com/yiminghe/async-validator
 *
 * @example
 *  const validateRules = {
 *    name: {
 *      type: 'number',
 *      required: true,
 *    },
 *  };
 */
const validateRules = {
  path: {
    // 跳转小程序路由路径
    type: 'string',
    required: true,
  },
  width: {
    // 宽度
    type: 'number',
    required: false,
  },
  r: {
    type: 'number',
    required: false,
  },
  g: {
    type: 'number',
    required: false,
  },
  b: {
    type: 'number',
    required: false,
  },

};


/**
 * 描述：生成小程序二维码接口
 * 请求方式：GET
 * @param {axios config} opt 请求配置信息
 * @returns {promise}
 */
export async function getMiniCode(opt = {}) {
  try {
    const { params = {}, data = {}, ...others } = opt;
    const options = {
      url: '/api/v3/oauth/wechat/miniprogram/code', // 请求地址
      method: 'GET',
      params,
      data,
      ...others,
      validateRules,
    };
    const result = await request.dispatcher(options);
    return result;
  } catch (error) {
    return handleError(error);
  }
}
