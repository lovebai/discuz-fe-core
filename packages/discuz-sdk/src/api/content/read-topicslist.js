/**
 * 描述：话题列表
 */
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
  page: {
    type: 'number',
  },
  perPage: {
    type: 'number',
  },
  filter: {
    type: 'object',
    fields: {
      content: {
        type: 'string',
      },
      username: {
        type: 'string',
      },
      recommended: {
        type: 'number',
      },
      createdAtBegin: {
        type: 'date',
      },
      createdAtEnd: {
        type: 'date',
      },
      threadCountBegin: {
        type: 'number',
      },
      threadCountEnd: {
        type: 'number',
      },
      viewCountBegin: {
        type: 'number',
      },
      viewCountEnd: {
        type: 'number',
      },
    },
  },
};

/**
 * 描述：话题列表
 * 请求方式：GET
 * @param {axios config} opt 请求配置信息
 * @returns {promise}
 */
export async function readTopicsList(opt = {}) {
  try {
    const { params = {}, data = {}, ...others } = opt;
    const options = {
      url: '/api/v3/topics.list', // 请求地址
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
};

