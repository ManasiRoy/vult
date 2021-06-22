<template lang='pug'>
div
  .container.mx-auto.app
    Header 
    router-view

    .app
      // Sidebar with Dimmer 
      .inset-0.flex.z-40
        // Sidebar
        .absolute.flex.top-0.h-screen.z-20(
          :class="[right ? 'right-0 flex-row' : 'left-0 flex-row-reverse']"
        )
          // Drawer
          button.p-1.rounded-full.text-gray-400transition-color.duration-300.mb-auto(
            @click.prevent="toggle()",
            class="focus:outline-none"
          )
            span.sr-only View notifications
            MenuAlt1Icon.w-12.h-12(aria-hidden="true")

          // Sidebar Content
          .transition-all.duration-700.bg-yellow-200.overflow-hidden.flex.items-center.justify-center(
            ref="content",
            :class="[open ? 'w-96' : 'max-w-0']"
          )
            .w-48.text-center.font-bold.text-xl Sidebar
        transition(name="fade")
          // Dimmer
          .flex-1.bg-gray-400.bg-opacity-75.z-10(
            v-if="dimmer && open",
            @click="toggle()",
            class="active:outline-none"
          )
</template>
<script>
import { MenuAlt1Icon } from "@vue-hero-icons/outline";
import About from "./components/About.vue";
import Header from "./components/Header.vue";

export default {
  name: "app",
  components: {
    MenuAlt1Icon,
    About,
    Header,
  },
  data() {
    return {
      open: false,
      dimmer: true,
      right: false,
    };
  },
  methods: {
    toggle() {
      this.open = !this.open;
    },
  },
};
</script>

