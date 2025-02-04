<template>
  
  <Page auto-content-height>
    

      <Grid table-title="Lista de Productos" table-title-help="Listado de productos disponibles en la plataforma">
        <template #toolbar-tools>
      </template>
    </Grid>
      
  </Page>
  </template>
  
  <script setup lang="ts">
    import {  onMounted,ref,type Ref } from 'vue';
    import apolloClient from '../../api/apolloClient';
    import { SearchProductDocument, type SearchProductQuery,type ProductNode } from "./../../generated/graphql";
    import { useVbenVxeGrid } from '#/adapter/vxe-table';
    import type { VxeGridListeners, VxeGridProps } from '#/adapter/vxe-table';
    import { Page } from '@vben/common-ui';



    const products: Ref<ProductNode[]> = ref([]);

    interface RowType {
      category: string;
      color: string;
      id: string;
      price: string;
      productName: string;
      releaseDate: string;
    }
      const gridOptions: VxeGridProps<RowType> = {
          checkboxConfig: {
            highlight: true,
            labelField: 'name',
          },
          columns: [
            { title: 'No', type: 'seq', width: 50 },
            { field: 'title',title: 'Title', width: 50 },
            { field: 'description',align: 'left', title: 'Description', width: 100 },
            { field: 'category', title: 'Category' },
            { field: 'condition', title: 'Condition' },
            { field: 'price', title: 'Price' },
            { field: 'cuantity', title: 'Cuantity' },
            { field: 'createdAt', formatter: 'formatDateTime', title: 'Published' },
          ],
          exportConfig: {},
          keepSource: true,
          proxyConfig: {
            ajax: {
              //Formatera la salida  a un json simple
              query: async ({ page }) => {
                const { data } = await apolloClient.query<SearchProductQuery>({
                    query: SearchProductDocument,
                    variables: {
                      first: page.pageSize,
                      after: null,
                    },
                  });
                  console.log(data);
                return {
                  data: data?.searchProduct?.edges.map(edge => edge?.node) ?? [],
                  page: {
                    total: data?.searchProduct?.pageInfo.endCursor ? 1 : 0
                  }
                };
              },
            },
          },
          toolbarConfig: {
            custom: true,
            export: true,
            // import: true,
            refresh: true,
            zoom: true,
          },
        };
    const [Grid, gridApi] = useVbenVxeGrid({
      gridOptions,
      });


    
onMounted(async () => {
  const { data } = await apolloClient.query<SearchProductQuery>({
    query: SearchProductDocument,
    variables: {
      first: 10,
      after: null,
    },
    

  });
  
   products.value = data?.searchProduct?.edges.map((edges) => edges?.node).filter((node): node is ProductNode => node !== null && node !== undefined) || [];
});


  </script>
  
  <style scoped>
  </style>