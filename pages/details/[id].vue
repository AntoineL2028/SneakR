
<template>
<navbar />
<detailsCard {{route.params.id}} v-for="sneakers in sneaker_data" :sneakers="sneakers" />
</template>

<script setup lang='ts'>
const route = useRoute()
const supabase = useSupabaseClient()
const { data: sneaker_data, error } = await useAsyncData('Sneakers', async () => {
    const { data, error } = await supabase
    .from('Sneakers')
    .select('*')
    .eq('id', route.params.id);
    if (error) {
        console.error('Error fetching Sneakers data:', error);
    }
    return data;
});
</script>

<style></style>