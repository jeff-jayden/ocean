import { ElMessage } from 'element-plus';
import { isPlainObject, omit, pick, uniqueId } from 'lodash-es';
import { MaybeRef, unref, watch } from 'vue';

// export const partitionPick = (source, keys) => [
//   pick(source, keys),
//   omit(source, keys),
// ];

// export const getXlsx = () => {
//   return import('xlsx');
// };

export const copyElText = (el: HTMLElement | string) => {
  let elm: HTMLElement | null;
  if (typeof el === 'string') {
    elm = document.createElement('p');
    elm.innerText = el;
    elm.style.position = 'absolute';
    elm.style.opacity = '0';
    document.body.appendChild(elm);
  } else {
    elm = el;
  }
  const selection = window.getSelection();
  if (selection?.rangeCount) {
    selection?.removeAllRanges();
  }
  const ra = document.createRange();
  ra.selectNode(elm);
  selection?.addRange(ra);
  try {
    const res = document.execCommand('copy');
    if (res) {
      ElMessage({
        message: '已复制到剪贴板',
        type: 'success',
      });
    } else {
      throw res;
    }
  } catch (e: any) {
    ElMessage({
      message: '复制失败',
      type: 'error',
    });
  } finally {
    ra.collapse();

    if (typeof el === 'string') {
      document.body.removeChild(elm);
      elm = null;
    }
  }
};

export const openBlank = (url: string) => {
  console.log('the open blank is : ', url);
  if (!url) return;
  if (window.isSecureContext) {
    try {
      const u = new URL(
        url,
        `${window.location.protocol}//${window.location.host}`
      );
      u.protocol = window.location.protocol;
      window.open(u.href, '_blank', 'noopener,noreferrer');
    } catch (e: any) {
      console.error(e);
    }
  } else {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
};

export const defineUniqueId = (
  target,
  key,
  value,
  uniquePrefix = 'condition_'
) => {
  if (Reflect.has(target, key)) {
    Reflect.deleteProperty(target, key);
  }
  Reflect.defineProperty(target, key, {
    enumerable: false,
    writable: false,
    value: value || uniqueId(uniquePrefix),
  });
};

/** 如果是对象则键为value，值为label；如果是数组则索引为value，值为label; 如果是数组且数组中的元素是对象，则采用labelKey和valueKey寻值 */
export function getOptions(data: {
  labelKey?: string;
  valueKey?: string;
  options: Record<string, any> | any[];
}): { label: string; value: any; disabled?: boolean; [x: string]: any }[] {
  const { options, labelKey = 'label', valueKey = 'value' } = data;

  if (Array.isArray(options)) {
    return options.map((opt, idx) => {
      if (isPlainObject(opt)) {
        return {
          ...opt,
          label: opt[labelKey],
          value: opt[valueKey],
          disabled: opt.disabled,
        };
      }
      return {
        label: opt,
        value: idx,
      };
    });
  }

  return Object.entries(options).map(([value, label]) => ({ value, label }));
}

/**
 * fork from {@link https://github.com/sindresorhus/escape-string-regexp}
 */
export const escapeStringRegexp = (string = '') =>
  string.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&').replace(/-/g, '\\x2d');

export function debugWarn(message: string | Error): void {
  if (process.env.NODE_ENV !== 'production') {
    const error: Error =
      typeof message === 'string' ? new Error(message) : message;
    console.warn(error);
  }
}

type DeprecationParam = {
  from: string;
  replacement?: string;
  scope: string;
  ref: string;
  type?: 'API' | 'Attribute' | 'Event' | 'Slot';
};
export function deprecateWarn({
  from,
  replacement,
  scope,
  ref,
  type = 'API',
}: DeprecationParam) {
  debugWarn(
    `[${scope}] [${type}] ${from} 已废弃${replacement ? `，请使用 ${replacement} 进行替换` : ''}。详情请参考: ${ref}`
  );
}

export const useDeprecated = (
  param: DeprecationParam,
  condition: MaybeRef<boolean>
) => {
  watch(
    () => unref(condition),
    (val) => {
      if (val) {
        deprecateWarn(param);
      }
    },
    { immediate: true }
  );
};
