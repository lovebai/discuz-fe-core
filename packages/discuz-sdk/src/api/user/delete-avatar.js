import { handleError } from '../utils/handle-error';
import request from '../_example';
/**
 * 描述： 删除头像接口
 */
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
  pid: {
    type: 'string',
    required: true
  }
};

/**
 * 描述： 删除头像接口
 * 请求方式：DELETE
 * @param {axios config} opt 请求配置信息
 * @returns {promise}
 */
export async function deleteAvatar(opt = {}) {
  try {
    const { params = {}, data = {}, ...others } = opt;
    const options = {
      url: '/api/users.v2/avatar', // 请求地址
      method: 'DELETE',
      params,
      data,
      ...others,
      validateRules,
    };
    const result = await request.dispatcher(options);
    return result;
  } catch (error) {
    return handleError(error)
  }
};

