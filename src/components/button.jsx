import { defineComponent, ref, h } from 'vue';

export default defineComponent((props, { emit }) => {
  const count = ref(0);

  const add = () => {
    count.value++;
  };

  return () => (
    <>
      <div>{count.value}</div>
      <button onClick={add}>click me</button>
    </>
  );

  // setup(props, { emit }) {
  //   const count = ref(0);
  //
  //   const add = () => {
  //     count.value++;
  //   };
  //
  //   return {
  //     count,
  //     add,
  //   };
  // },
  // render() {
  //   return (
  //     <>
  //       <div>{this.count}</div>
  //       <button onClick={this.add}>click me</button>
  //     </>
  //   );
  // },
});
