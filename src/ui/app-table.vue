<template>
    <table class="shadow-[0_0_12px_rgba(0,0,0,0.12)]">
        <thead>
            <tr>
                <th v-for="(header, i) in headers" :key="`header${i}`">
                {{ header.title }}
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) in body" :key="item.id">
            <td v-for="(bodyInHeader, bodyHeaderIndex) in headers" :key="`bodyHeader${bodyHeaderIndex}`">
                <slot :name="`body_${bodyInHeader.value}`" :item="item" :index="index">
                    {{ item[bodyInHeader.value] }}
                </slot>
            </td>
            </tr>
        </tbody> 
    </table>
    <div class="w-[95%] flex justify-between">
        <div></div>
            <button @click="downloadExcel" class="mt-[15px] flex gap-[5px] bg-green-600 text-white px-4 py-2 rounded hover:bg-green-800 transition ">
                <svg-icon type="mdi" :path="mdiFileDownloadOutline"></svg-icon> 
                <span>Excel formatda yuklash</span>
            </button>
        </div>
        <div class="nothing" v-if="!body.length">
            <span>No Data</span>
        </div>
</template>

<script setup>
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiFileDownloadOutline } from '@mdi/js';

const props = defineProps({
    headers: {
        type: Array,
        default: () => [],
    },
    body: {
        type: Array,
        default: () => [],
    }
});

import * as XLSX from 'xlsx'
import { saveAs } from 'file-saver'

const downloadExcel = () => {
  const jsonData = props.body.map((item) => ({
    'Foydalanuvchilar soni': item.userCount || 0,
    'Hudud': item.regionName || '',
    'Boshlang‘ich test (o‘rtacha %)': (item.averageInitialPercentage || 0) + '%',
    'Yakuniy test (o‘rtacha %)': (item.averageFinalPercentage || 0) + '%',
    'O‘sish (%)': (item.growthPercentage || 0) + '%',
  }))

  const worksheet = XLSX.utils.json_to_sheet(jsonData)

  // 📏 Ustun kengliklarini sozlaymiz:
  worksheet['!cols'] = [
    { wch: 20 }, // Foydalanuvchilar soni
    { wch: 15 }, // Hudud
    { wch: 30 }, // Boshlang‘ich test
    { wch: 30 }, // Yakuniy test
    { wch: 15 }, // O‘sish
  ]

  const workbook = XLSX.utils.book_new()
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Hududlar statistikasi')

  const excelBuffer = XLSX.write(workbook, {
    bookType: 'xlsx',
    type: 'array',
  })

  const blob = new Blob([excelBuffer], {
    type:
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8',
  })

  saveAs(blob, 'Hududlar_statistikasi.xlsx')
}





</script>

<style lang="scss" scoped>
@media (max-width: 800px) {
    table {
        overflow-x: scroll;
    }
}
table {
    width: 95%;
    background: white;
    padding: 20px;
    border-radius: 20px;
    border-collapse: separate;
    border-spacing: 0;
    overflow-x: scroll;
    thead {
        background-color: #f0f7fb;
        /* background-color: #eaf5fb; */
        th {
            /* border-top: 0.5px solid #bcbcbc; */
            /* border-left: 0.5px solid #bcbcbc; */
            border-right: 1px solid black;
            text-align: start;
            padding: 12px 0px 12px 24px;
            font-size: 14px;
        }
        th:not(:first-child) {
            text-align: center;
        }
    }
    tbody {
        tr {
            font-size:  12px;
        }
        /* tr:nth-child(even) {
            background-color: #f7fcff;
        } */
    }
}
.nothing {
    width: 97%;
    margin-left: 1.5%;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #bcbcbc;
    border-left: 1px solid #bcbcbc;
    border-right: 1px solid #bcbcbc;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    span {
        font-size: 16px;
    }
}
td {
    text-align: start;
    padding: 12px 0px 12px 24px;
    border-top: 1px solid black;
    border-right: 1px solid black;
    font-weight: 500;
    font-size: 14px;
}
td:not(:first-child) {
    text-align: center;
}
tr:last-child td:first-child {
    /* border-bottom-left-radius: 10px; */
}
tr:last-child td:first-child {
    /* border-bottom-right-radius: 10px; */
}
tr:last-child td:first-child {
    /* border-top-left-radius: 10px; */
    /* border-left: 0.5px solid #bcbcbc; */
}
tr:last-child td:first-child {
    /* border-top-right-radius: 10px; */
    /* border-bottom: 0.5px solid #bcbcbc; */
}
</style>