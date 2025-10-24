<template>
    <div>
        <el-row class="mb-4">
            <el-button>Default</el-button>
            <el-button type="primary">Primary</el-button>
            <el-button type="success">Success</el-button>
            <el-button type="info">Info</el-button>
            <el-button type="warning">Warning</el-button>
            <el-button type="danger">Danger</el-button>
        </el-row>

        <el-row class="mb-4">
            <el-button plain>Plain</el-button>
            <el-button type="primary" plain>Primary</el-button>
            <el-button type="success" plain>Success</el-button>
            <el-button type="info" plain>Info</el-button>
            <el-button type="warning" plain>Warning</el-button>
            <el-button type="danger" plain>Danger</el-button>
        </el-row>

        <el-row class="mb-4">
            <el-button round>Round</el-button>
            <el-button type="primary" round>Primary</el-button>
            <el-button type="success" round>Success</el-button>
            <el-button type="info" round>Info</el-button>
            <el-button type="warning" round>Warning</el-button>
            <el-button type="danger" round>Danger</el-button>
        </el-row>

        <el-row>
            <el-button :icon="Search" circle/>
            <el-button type="primary" :icon="Edit" circle/>
            <el-button type="success" :icon="Check" circle/>
            <el-button type="info" :icon="Message" circle/>
            <el-button type="warning" :icon="Star" circle/>
            <el-button type="danger" :icon="Delete" circle/>
        </el-row>


        <el-container>
            <el-header>header</el-header>
            <el-main>
                <el-container>
                    <el-aside>aside</el-aside>
                    <el-main>main</el-main>
                </el-container>
            </el-main>
            <el-footer>footer</el-footer>
        </el-container>

        <el-row :gutter="20">
            <el-col :span="8" style="margin-bottom: 20px;"><div style="background-color: #f00;">1-1</div></el-col>
            <el-col :span="8" style="margin-bottom: 20px;"><div style="background-color: #f00;">1-2</div></el-col>
            <el-col :span="8" style="margin-bottom: 20px;"><div style="background-color: #f00;">1-3</div></el-col>
            <el-col :span="8" style="margin-bottom: 20px;"><div style="background-color: #f00;">2-1</div></el-col>
            <el-col :span="8" style="margin-bottom: 20px;"><div style="background-color: #f00;">2-2</div></el-col>
            <el-col :span="8" style="margin-bottom: 20px;"><div style="background-color: #f00;">2-3</div></el-col>
        </el-row>


        <el-form :model="form" label-width="120px">
            <el-form-item label="Activity name">
                <el-input v-model="form.name" />
            </el-form-item>
            <el-form-item label="Activity zone">
                <el-select v-model="form.region" placeholder="please select your zone">
                    <el-option label="Zone one" value="shanghai" />
                    <el-option label="Zone two" value="beijing" />
                </el-select>
            </el-form-item>
            <el-form-item label="Activity time">
                <el-col :span="11">
                    <el-date-picker
                        v-model="form.date1"
                        type="date"
                        placeholder="Pick a date"
                        style="width: 100%"
                    />
                </el-col>
                <el-col :span="2" class="text-center">
                    <span class="text-gray-500">-</span>
                </el-col>
                <el-col :span="11">
                    <el-time-picker
                        v-model="form.date2"
                        placeholder="Pick a time"
                        style="width: 100%"
                    />
                </el-col>
            </el-form-item>
            <el-form-item label="Instant delivery">
                <el-switch v-model="form.delivery" />
            </el-form-item>
            <el-form-item label="Activity type">
                <el-checkbox-group v-model="form.type">
                    <el-checkbox label="Online activities" name="type" />
                    <el-checkbox label="Promotion activities" name="type" />
                    <el-checkbox label="Offline activities" name="type" />
                    <el-checkbox label="Simple brand exposure" name="type" />
                </el-checkbox-group>
            </el-form-item>
            <el-form-item label="Resources">
                <el-radio-group v-model="form.resource">
                    <el-radio label="Sponsor" />
                    <el-radio label="Venue" />
                </el-radio-group>
            </el-form-item>
            <el-form-item label="Activity form">
                <el-input v-model="form.desc" type="textarea" />
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">Create</el-button>
                <el-button>Cancel</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script setup>
import {
    Check,
    Delete,
    Edit,
    Message,
    Search,
    Star,
} from '@element-plus/icons-vue'
import {reactive} from 'vue'

const form = reactive({
    name: '',
    region: '',
    date1: '',
    date2: '',
    delivery: false,
    type: [],
    resource: '',
    desc: '',
})
</script>

<style>
</style>
