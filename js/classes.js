jQuery(document).ready(function ($) {
    function formatCurrency(amount) {
        return '$' + parseFloat(amount).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    }

    function calculateTotalCost() {
        // Get input values
        var weight = parseFloat($('#weight').val()) || 0;
        var height = parseFloat($('#height').val()) || 0;
        var width = parseFloat($('#width').val()) || 0;
        var length = parseFloat($('#length').val()) || 0;

        // Calculate volume
        var volume = (height * width * length) / 1000000; // Convert cubic cm to cubic meters

        // Get selected options
        var modeOfDelivery = $('#mode_of_delivery').val();
        var deliveryMaterial = $('#delivery_material').val();
        var deliverySpeed = $('#delivery_speed').val();

        // Define cost per weight, volume, and selected options
        var costPerKg = 5; // Example base cost per KG
        var costPerCubicMeter = 100; // Example base cost per cubic meter

        // Retrieve the material cost based on the selected delivery material
        var $widget = $('.delivery-cost-widget');
        var deliveryCostsObj = {
            'air': parseFloat($widget.data('cost-air')) || 30,
            'train': parseFloat($widget.data('cost-train')) || 20,
            'ship': parseFloat($widget.data('cost-ship')) || 10
        };

        var speedCostsObj = {
            'standard': parseFloat($widget.data('cost-standard')) || 10,
            'fast': parseFloat($widget.data('cost-fast')) || 20,
            'express': parseFloat($widget.data('cost-express')) || 30
        };

        var materialCosts = {
            'auto_parts': parseFloat($widget.data('cost-auto-parts')) || 10,
            'building_materials': parseFloat($widget.data('cost-building-materials')) || 20,
            'electronics_durables': parseFloat($widget.data('cost-electronics-durables')) || 20,
            'chemicals_fertilizers': parseFloat($widget.data('cost-chemicals-fertilizers')) || 30,
            'fruits_vegetables': parseFloat($widget.data('cost-fruits-vegetables')) || 20,
            'household_goods': parseFloat($widget.data('cost-household-goods')) || 30,
            'industrial_equipments': parseFloat($widget.data('cost-industrial-equipments')) || 50,
            'liquids_oil': parseFloat($widget.data('cost-liquids-oil')) || 40,
            'medical_items': parseFloat($widget.data('cost-medical-items')) || 40,
            'refrigerated_goods': parseFloat($widget.data('cost-refrigerated-goods')) || 50
        };

        var materialCost = materialCosts[deliveryMaterial] || 2.0;

        // Calculate base cost based on weight, volume, and selected options
        var baseCost = (weight * costPerKg) + (volume * costPerCubicMeter);
        var totalCost = baseCost * deliveryCostsObj[modeOfDelivery] * speedCostsObj[deliverySpeed] + materialCost;

        // Update result
        $('#transport_cost').html(formatCurrency(totalCost));
    }

    // Bind calculate button
    $('#calculate_button').on('click', function () {
        calculateTotalCost();
    });
});