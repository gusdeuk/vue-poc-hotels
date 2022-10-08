<template>
    <div class="filter-component">
        <div class="column-1">
            <div>
                <div>
                    <label class="form-label">Rewards customer?</label>
                    <div class="customer-block">
                        <label class="custom-label" for="customerType">NO</label>
                        <div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" id="customerType" @change="toggleCustomerType" checked />
                        </div>
                        <label class="custom-label" for="customerType">YES</label>
                    </div>
                </div>

                <div class="ammenities-block form-check">
                    <input class="form-check-input" type="checkbox" checked value="" id="toggleAmmenities" @change="toggleAmmenities" />
                    <label for="toggleAmmenities" class="form-label noselect">
                        Show Ammenities
                    </label>
                </div>
            </div>
        </div>

        <div class="column-2">
            <div class="dates-block">
                <div>
                    <label for="basic-addon1" class="form-label">Start date</label>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">@</span>
                        <input type="date" class="form-control" placeholder="Start Date" @change="setStartDate" />
                    </div>
                </div>

                <div>
                    <label for="basic-addon1" class="form-label">End date</label>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">@</span>
                        <input type="date" class="form-control" placeholder="End Date" @change="setEndDate" />
                    </div>
                </div>
            </div>
        </div>

        <div class="column-3">
            <div class="action-block">
                <button type="button" class="btn btn-primary enter-btn" @click="search('', $event)">SEARCH CHEAPEST HOTEL</button>
            </div>
        </div>
    </div>
</template>

<script src="./CatalogFilter.js"></script>
<style src="./CatalogFilter.scss" scoped lang="scss"></style>
