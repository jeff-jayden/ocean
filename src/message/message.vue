<template>
  <div class="message-container">
    message组件
    <Button />

    <el-button plain @click="centerDialogVisible = true">
      Click to open the Dialog
    </el-button>

    <el-button type="primary" style="margin-left: 16px" @click="drawer = true">
      open
    </el-button>

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

    <el-drawer
      v-model="drawer"
      title="I am the title"
      direction="rtl"
    >
      <span>Hi, there!</span>
    </el-drawer>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Button from '@/components/button.jsx';

const centerDialogVisible = ref(false);
const drawer = ref(false);
</script>

<style scoped></style>
