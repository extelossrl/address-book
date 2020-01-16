<template>
  <b-table
    paginated
    :per-page="5"
    :data="data"
    :columns="columns"
    :loading="loading"
    @click="$emit('click', $event)"
  >
    <template slot="empty">
      <section class="section">
        <div class="content has-text-grey has-text-centered">
          <p>
            <b-icon icon="emoticon-sad" size="is-large"> </b-icon>
          </p>
          <p>{{ $t("app.empty") }}</p>
        </div>
      </section>
    </template>
  </b-table>
</template>

<script>
export default {
  props: {
    data: {
      type: Array
    },
    columns: {
      type: Array
    },
    loading: {
      type: Boolean
    }
  }
};
</script>
