<script lang="ts">
  import "./my-web-component";

  let show = $state(true);

  function onclick() {
    show = !show;
  }
</script>

<button {onclick}> Toggle web component </button>

<p class="blue">My blue text</p>

{#if show}
  <my-web-component></my-web-component>
{/if}

<style>
  .blue {
    color: blue;
  }
</style>
