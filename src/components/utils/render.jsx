import { ElIcon } from 'element-plus';
import { h } from 'vue';

export const renderItemIcon = (menuItem) => {
  const { icon } = menuItem;
  return icon && <ElIcon>{
    h(icon)
  }</ElIcon>;
};

export const renderItemContent = (menuItem) => {
  const { label } = menuItem;
  return label && <span class="jsx_content">{label}</span>;
};

export const renderMenuItem = (menuItem) => (
  <>
    {renderItemIcon(menuItem)}
    {renderItemContent(menuItem)}
  </>
);
