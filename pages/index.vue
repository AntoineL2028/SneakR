<template>
      <navbar />
      <div class="grid">
          <!-- add sneakers cards -->
            <sneakersCard v-for="sneaker in sneakers_data" :sneaker="sneaker" />
      </div>
      <!-- <pagination /> -->
      <UPagination class="pagination" :max="5" v-model="pagination" :page-count="493" :total="49214" />
</template>

<script setup>
const pagination = ref(1)
const sneakersPerPage = 32
const supabase = useSupabaseClient()
const { data: sneakers_data, error } = await useAsyncData('Sneakers', async () => {
    const { data, error } = await supabase
        .from('Sneakers')
        .select('*')
        .range(pagination.value * sneakersPerPage - sneakersPerPage, pagination.value * sneakersPerPage - 1);
    if (error) {
        console.error('Error fetching Sneakers data:', error);
    }
    return data;
});
watch(pagination, async (newPage)=> {
    const { data: sneakers_data, error } = await useAsyncData('Sneakers', async () => {
        const { data, error } = await supabase
            .from('Sneakers')
            .select('*')
            .range(pagination.value * sneakersPerPage - sneakersPerPage, pagination.value * sneakersPerPage - 1);
        if (error) {
            console.error('Error fetching Sneakers data:', error);
        }
        window.scrollTo(0,0)
        return data;
    });
})
</script>


<style>
.grid {
  margin: 20px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}
.pagination {
    align-items: center;
    justify-content: center;
}
</style>