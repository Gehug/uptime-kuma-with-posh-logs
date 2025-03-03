<template>
    <div class="shadow-box table-shadow-box">
        <table class="table table-borderless table-hover">
            <thead>
                <tr>
                    <th>{{ $t("Status") }}</th>
                    <th>{{ $t("DateTime") }}</th>
                    <th>{{ $t("Error Message") }}</th>
                </tr>
            </thead>
            <tbody>
                <!-- <tr style="padding: 10px;">
                    <td>Error</td>
                    <td>2025-03-01 20:42:30	</td>
                    <td class="border-0">There is a error</td>
                </tr> -->

                <tr v-for="(error, index) in displayedRecords" :key="index" style="padding: 10px;">
                            <td>{{ error.status }} </td>
                            <td :class="{ 'border-0':! error.msg}">{{ error.time }}</td>
                            <td class="border-0">{{ error.msg }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            displayedRecords: [
                { status: 'Error Resolved', time: '2025-03-01T10:00:00', msg: 'Test message 1' },
                { status: 'Error', time: '2025-03-01T11:00:00', msg: '' },
                { status: 'active', time: '2025-03-01T12:00:00', msg: 'Test message 3' },
            ]
        };
    }
};
</script>

<style scoped>
h1 {
    color: blue;
}
</style>