import { defineStore } from 'pinia';

const theme = defineStore({
  id: 'theme',
  state: () => {
    return {
      themeType: '亮蓝色',
      themeColor: '#2080F0FF',
    };
  },
  getters: {
    getThemeType: (state) => state.themeType,
    getThemeColor: (state) => state.themeColor,
  },
  actions: {
    setTheme(type: string, color: string) {
      this.themeType = type;
      this.themeColor = color;
    },
  },
});

export default theme;
