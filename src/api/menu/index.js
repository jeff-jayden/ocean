import { ChatDotRound, Menu } from '@element-plus/icons-vue';

const menu = [
  {
    label: '任务中心',
    icon: Menu,
    children: [
      {
        label: '制作任务',
        route: 'feature',
        icon: Menu,
      },
      {
        label: '查看任务',
        route: 'work',
        icon: Menu,
      },
      {
        label: '分享任务',
        route: 'content',
        icon: Menu,
      },
    ],
  },
  {
    label: '信息中心',
    icon: ChatDotRound,
    route: 'message',
  },
];

export { menu };
export default menu;
