<script setup>
import { ref } from 'vue'
import { FilterMatchMode } from '@primevue/core/api'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import InputText from 'primevue/inputtext'
import IconField from 'primevue/iconfield'
import InputIcon from 'primevue/inputicon'
import Tag from 'primevue/tag'
import Button from 'primevue/button'
import Dialog from 'primevue/dialog'
import 'primeicons/primeicons.css';

const loading = ref(false)
const visible = ref(false);


const users = [
  {
    code: '00001',
    fullname: 'Andres Eduardo Córdova Orellana',
    dui: '00000000-0',
    email: 'aecordova@innovacion.gob.sv',
    status: 'active'
  },
  {
    code: '00002',
    fullname: 'José Eduardo Córdova Orellana',
    dui: '00000000-1',
    email: 'jecordova@innovacion.gob.sv',
    status: 'inactive'
  },
  {
    code: '00003',
    fullname: 'María José Córdova Orellana',
    dui: '00000000-2',
    email: 'mjcordova@innovacion.gob.sv',
    status: 'active'
  },
  {
    code: '00004',
    fullname: 'Juan José Córdova Orellana',
    dui: '00000000-3',
    email: 'jjcordova@innovacion.gob.sv',
    status: 'active'
  },
  {
    code: '00005',
    fullname: 'José María Córdova Orellana',
    dui: '00000000-4',
    email: 'jmcordova@innovacion.gob.sv',
    status: 'inactive'
  },
  {
    code: '00006',
    fullname: 'María José Córdova Orellana',
    dui: '00000000-5',
    email: 'mjcordova@innovacion.gob.sv',
    status: 'active'
  },
]

const filters = ref({
  global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  code: { value: null, matchMode: FilterMatchMode.CONTAINS },
  fullname: { value: null, matchMode: FilterMatchMode.CONTAINS },
  dui: { value: null, matchMode: FilterMatchMode.CONTAINS },
  email: { value: null, matchMode: FilterMatchMode.CONTAINS },
  status: { value: null, matchMode: FilterMatchMode.CONTAINS }
})
</script>

<template>
  <div class="m-5 font-pop">
    <h1 class="text-xl text-monochrome-main select-none">Welcome to the section in which you can manage users type
      administrators.</h1>

    <div class="flex items-center gap-2 mt-4">
      <Button label="HELP" severity="primary" icon="pi pi-question" rounded />
      <Button label="REFRESH" severity="secondary" icon="pi pi-refresh" rounded />
      <Button label="ADD NEW ADMIN" severity="success" icon="pi pi-plus" rounded @click="visible = true"/>
      <Button label="DELETE" severity="danger" icon="pi pi-trash" rounded />
      <Button label="EXPORT" severity="warn" icon="pi pi-upload" rounded />
      <Button label="IMPORT" severity="help" icon="pi pi-download" rounded />
      <Button label="PRINT" severity="contrast" icon="pi pi-print" rounded />
    </div>
    <div class="card tabla fixed">
      <DataTable v-model:filters="filters" :value="users" paginator :rows="5" dataKey="id" filterDisplay="row"
                 :loading="loading"
                 :globalFilterFields="['code', 'fullname', 'dui', 'email']"
      >
        <template #header>
          <div class="flex justify-end">
            <IconField>
              <InputIcon>
                <i class="pi pi-search" />
              </InputIcon>
              <InputText v-model="filters['global'].value" placeholder="Keyword Search" />
            </IconField>
          </div>
        </template>
        <template #empty> No administrators found.</template>
        <template #loading> Loading administrator data. Please wait.</template>
        <Column field="code" header="Code" style="min-width: 12rem">
          <template #filter="{ filterModel, filterCallback }">
            <InputText v-model="filterModel.value" type="text" @input="filterCallback()" placeholder="Search by CODE" />
          </template>
        </Column>
        <Column field="fullname" header="Fullname" style="min-width: 12rem">
          <template #filter="{ filterModel, filterCallback }">
            <InputText v-model="filterModel.value" type="text" @input="filterCallback()"
                       placeholder="Search by FULLNAME" />
          </template>
        </Column>
        <Column field="dui" header="DUI" style="min-width: 12rem">
          <template #filter="{ filterModel, filterCallback }">
            <InputText v-model="filterModel.value" type="text" @input="filterCallback()" placeholder="Search by DUI" />
          </template>
        </Column>
        <Column field="email" header="Email" style="min-width: 12rem">
          <template #filter="{ filterModel, filterCallback }">
            <InputText v-model="filterModel.value" type="text" @input="filterCallback()"
                       placeholder="Search by EMAIL" />
          </template>
        </Column>
        <Column field="status" header="Status" style="min-width: 12rem">
          <template #body="{ data }">
            <Tag :value="data.status" :severity="data.status === 'active' ? 'success' : 'danger'" />
          </template>
          <template #filter="{ filterModel, filterCallback }">
            <InputText v-model="filterModel.value" type="text" @input="filterCallback()"
                       placeholder="Search by STATUS" />
          </template>
        </Column>
      </DataTable>
    </div>

    <Dialog v-model:visible="visible" modal header="Add new administrator" :style="{ width: '45rem' }">
      <span class="text-surface-500 dark:text-surface-400 block mb-8">Introduce the administrator's information</span>
      <div class="flex items-center gap-4 mb-4">
        <label for="fullname" class="font-semibold w-24">Fullname</label>
        <InputText id="fullname" class="flex-auto" autocomplete="off" />
      </div>
      <div class="flex items-center gap-4 mb-4">
        <label for="dui" class="font-semibold w-24">DUI</label>
        <InputText id="dui" class="flex-auto" autocomplete="off" />
      </div>
      <div class="flex items-center gap-4 mb-8">
        <label for="email" class="font-semibold w-24">Email</label>
        <InputText id="email" class="flex-auto" autocomplete="off" />
      </div>
      <div class="flex justify-end gap-2">
        <Button type="button" label="Cancel" severity="secondary" @click="visible = false"></Button>
        <Button type="button" label="Save" @click="visible = false"></Button>
      </div>
    </Dialog>
  </div>
</template>

<style scoped>
.tabla {
  right: 30px;
  left: 74px;
}

:deep(.p-datatable-table) {
  border-spacing: 0;
  width: 90% !important;
}
</style>