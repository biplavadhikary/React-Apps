export default function () {
  return {
    invoices: [],
    customers: [],
    invoiceStats: {
      total_customer: 0,
      total_open_AR: 0,
      average_days_delay: 0,
      total_open_invoices: 0,
    },
    selectedCustomerName: "all",
    selectedCustomerId: "all",
    selectedCustomerStats: {
      total_open_invoices: 0,
      total_open_AR: 0,
    },
  };
}
