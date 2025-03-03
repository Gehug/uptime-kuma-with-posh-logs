const { BeanModel } = require("redbean-node/dist/bean-model");
const { R } = require("redbean-node");
const dayjs = require("dayjs");

class ErrorModel extends BeanModel {
    /**
     * Get a readable string for the error type
     * @returns {string} Human-readable error type
     */


    /**
     * Returns an object that is ready to parse to JSON
     * @returns {object} Object ready to parse
     */
    toJSON() {
        return {
            id: this.id,
            monitorID: this.monitor_id,  // Foreign key reference to monitors
            type: this.type,
            message: this.message,
            created_date: this.created_date,
        };
    }
}

module.exports = ErrorModel;