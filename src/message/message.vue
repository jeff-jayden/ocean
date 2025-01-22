<template>
  <div class="message-container">
    message组件

    <Button />

    <div class="message box-border h-32 w-32 p-4 border-4 bg-gray-400">
      tailwindcss
    </div>

    <el-button plain @click="centerDialogVisible = true">
      Click to open the Dialog
    </el-button>

    <el-button type="primary" style="margin-left: 16px" @click="drawer = true">
      open
    </el-button>

    <span
      style="display: inline-block; width: 100px; background-color: #969aa0"
    >
      <text_ellipsis
        text="Open the dialog from the center from the screen"
        copyable
        watch
      ></text_ellipsis>
    </span>

    <el-dialog
      v-model="centerDialogVisible"
      title="Warning"
      width="500"
      align-center
    >
      <span>Open the dialog from the center from the screen</span>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="centerDialogVisible = false">Cancel</el-button>
          <el-button type="primary" @click="centerDialogVisible = false">
            Confirm
          </el-button>
        </div>
      </template>
    </el-dialog>

    <el-drawer v-model="drawer" title="I am the title" direction="rtl">
      <span>Hi, there!</span>
    </el-drawer>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Button from '@/components/button_composition_jsx.vue';
import Text_ellipsis from '@/components/text_ellipsis.vue';

const centerDialogVisible = ref(false);
const drawer = ref(false);
</script>

<style scoped></style>
