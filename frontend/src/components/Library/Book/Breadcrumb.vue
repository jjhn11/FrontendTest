<template>
    <nav class="breadcrumb-navigation" aria-label="Breadcrumb">
      <span class="breadcrumb-label">ESTAS EN:</span>
      <template v-for="(path, index) in paths" :key="index">
        <a
          :href="path.path"
          :class="['breadcrumb-item', { active: path.active }]"
          :aria-current="path.active ? 'page' : undefined"
        >
          {{ path.name }}
        </a>
        <span v-if="index < paths.length - 1" class="breadcrumb-separator"
          >&gt;</span
        >
      </template>
    </nav>
  </template>
  
  <script>
  export default {
    name: "BreadcrumbNavigation",
    props: {
      paths: {
        type: Array,
        required: true,
        // Each path should have: { name: String, path: String, active?: Boolean }
      },
    },
  };
  </script>
  
  <style scoped>
  .breadcrumb-navigation {
    align-self: start;
    display: flex;
    margin-left: 32px;
    align-items: center;
    gap: 22px;
    font-family:
      Josefin Sans,
      -apple-system,
      Roboto,
      Helvetica,
      sans-serif;
    font-size: 18px;
    color: rgba(0, 14, 50, 1);
    font-weight: 700;
    text-align: center;
  }
  
  .breadcrumb-label {
    font-family:
      Nunito Sans,
      -apple-system,
      Roboto,
      Helvetica,
      sans-serif;
    align-self: stretch;
  }
  
  .breadcrumb-item {
    align-self: stretch;
    margin-top: auto;
    margin-bottom: auto;
    text-decoration: none;
    color: rgba(0, 14, 50, 1);
  }
  
  .breadcrumb-item.active {
    color: rgba(0, 71, 255, 1);
  }
  
  .breadcrumb-separator {
    margin: 0 5px;
  }
  </style>
  