<script>
  import { onMount } from 'svelte';

  const variants = {
    SOLID: 'solid',
    GHOST: 'ghost',
    OUTLINE: 'outline',
    LINK: 'link',
    UNSTYLED: 'unstyled'
  };

  const sizes = {
    XS: 'xs',
    SM: 'sm',
    MD: 'md',
    LG: 'lg',
    XL: 'xl'
  }

  export let size = sizes.MD;
  export let variant = variants.SOLID;
  export let variantColor = 'gray';

  export let isLoading = false;

  // export let styles;

  let ref;
</script>

<button class="substrate" bind:this={ref}>
  <slot />
</button>

<style>
  button {
    --bg-color: gray;
  }

  button {
    background-color: var(--bg-color);
  }
</style>