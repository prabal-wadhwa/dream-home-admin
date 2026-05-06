export const menuList = [
  { name: 'Dashboard', icon: 'home', route: '/dashboard' },

  {
    name: 'Properties',
    icon: 'home-work',
    expanded: false,
    children: [
      { name: 'All Properties', icon: 'circle', route: '/properties/all' },
      { name: 'Add New Properties', icon: 'circle', route: '/properties/add' },
      { name: 'Property Categories', icon: 'circle', route: '/properties/categories' },
      { name: 'Property Features', icon: 'circle', route: '/properties/features' },
    ],
  },

  { name: 'Users', icon: 'users', route: 'users' },
  {
    name: 'Reports',
    icon: 'reports',
    expanded: false,
    children: [
      { name: 'Overview', icon: 'circle', route: '/reports/overview' },
      { name: 'Sale Reports', icon: 'circle', route: '/reports/sale-reports' },
      { name: 'Booking Reports', icon: 'circle', route: '/reports/booking-reports' },
      { name: 'Payment Reports', icon: 'circle', route: '/reports/payment-reports' },
    ],
  },
  { name: 'Bookings', icon: 'calendar', route: '/bookings' },
  { name: 'Enquiries', icon: 'message-square', route: '/enquiries' },
  { name: 'Messages', icon: 'message', route: '/messages' },
  {
    name: 'Payments',
    icon: 'credit-card',
    expanded: false,
    children: [
      { name: 'All Payments', icon: 'circle', route: '/payments/all' },
      { name: 'Payment Methods', icon: 'circle', route: '/payments/methods' },
      { name: 'Payment Details', icon: 'circle', route: '/payments/details' },
    ],
  },
];

export const revenueOverview = {
  tooltip: {
    trigger: 'axis',
  },

  legend: {
    data: ['This Month', 'Last Month'],
  },

  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
  },

  yAxis: {
    type: 'value',
  },

  series: [
    {
      name: 'This Month',
      type: 'line',
      smooth: true,
      data: [1000, 2000, 3000, 2500, 3500, 4500, 4000, 5000, 6000, 5500],
      lineStyle: {
        color: '#2563eb',
        width: 3,
      },
      itemStyle: {
        color: '#2563eb',
      },
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            { offset: 0, color: 'rgba(37,99,235,0.3)' },
            { offset: 1, color: 'rgba(37,99,235,0)' },
          ],
        },
      },
    },

    {
      name: 'Last Month',
      type: 'line',
      smooth: true,
      data: [800, 1500, 2000, 1800, 2500, 3000, 3200, 3800, 4200, 4000],
      lineStyle: {
        type: 'dashed',
        color: '#94a3b8',
      },
      itemStyle: {
        color: '#94a3b8',
      },
    },
  ],
};
export const stats = [
  {
    title: 'Total Revenue',
    value: '$166,090',
    growth: '15.6%',
    icon: 'dollar',
    color: '#1E0B88',
  },
  {
    title: 'Total Bookings',
    value: '220',
    growth: '10.6%',
    icon: 'calendar',
    color: '#22c55e',
  },
  {
    title: 'Total Properties',
    value: '1120',
    growth: '50.6%',
    icon: 'home',
    color: '#a855f7',
  },
  {
    title: 'Total Users',
    value: '150',
    growth: '59%',
    icon: 'contact',
    color: '#f97316',
  },
];

export const bookingCharts = {
  tooltip: {
    trigger: 'item',
    formatter: '{b}: {c} ({d}%)',
  },

  series: [
    {
      type: 'pie',
      radius: ['80%', '100%'],
      center: ['50%', '50%'],

      label: {
        show: false,
      },

      itemStyle: {
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 4,
      },

      data: [
        { value: 40, name: 'Confirmed', itemStyle: { color: '#22c55e' } },
        { value: 25, name: 'Pending', itemStyle: { color: '#4f46e5' } },
        { value: 15, name: 'Cancelled', itemStyle: { color: '#f59e0b' } },
        { value: 20, name: 'Refund', itemStyle: { color: '#a855f7' } },
      ],
    },
  ],
};

export const salesReportsCharts = {
  tooltip: {
    trigger: 'item',
    formatter: '{b}: {c} ({d}%)',
  },

  series: [
    {
      type: 'pie',
      radius: ['80%', '100%'],
      center: ['50%', '50%'],

      label: {
        show: false,
      },

      itemStyle: {
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 4,
      },

      data: [
        { value: 40, name: 'Villas', itemStyle: { color: '#22c55e' } },
        { value: 25, name: 'Apartments', itemStyle: { color: '#4f46e5' } },
        { value: 15, name: 'Houses', itemStyle: { color: '#f59e0b' } },
        { value: 20, name: 'Commercials', itemStyle: { color: '#a855f7' } },
      ],
    },
  ],
};

export const bookingsData = [
  {
    id: '#BK00128',
    property: {
      name: 'Modern Luxury Villa',
      location: 'Beverly Hills, CA',
      image: '/icons/property.png',
    },
    client: {
      name: 'John Smith',
      phone: '(555) 232-3223',
    },
    date: 'May 8, 2025',
    time: '10:30 AM',
    user: {
      name: 'Michael Brown',
      avatar: '/icons/avatar.png',
    },
    status: 'Confirmed',
    amount: 2699,
  },
  {
    id: '#BK00127',
    property: {
      name: 'Downtown Apartment',
      location: 'New York, USA',
      image: '/icons/property.png',
    },
    client: {
      name: 'John Smith',
      phone: '(555) 232-3223',
    },
    date: 'June 3, 2025',
    time: '10:50 AM',
    user: {
      name: 'Emily Davis',
      avatar: '/icons/avatar.png',
    },
    status: 'Confirmed',
    amount: 4600,
  },
  {
    id: '#BK00126',
    property: {
      name: 'Family House',
      location: 'Austin, Texas',
      image: '/icons/property.png',
    },
    client: {
      name: 'John Smith',
      phone: '(555) 232-3223',
    },
    date: 'May 8, 2025',
    time: '10:30 AM',
    user: {
      name: 'Michael Jordan',
      avatar: '/icons/avatar.png',
    },
    status: 'Pending',
    amount: 23699,
  },
];

export const userStats = [
  {
    title: 'Total Users',
    value: '205',
    growth: '15.6%',
    icon: 'total-user',
    color: '#1E0B88',
  },
  {
    title: 'Active Users',
    value: '220',
    growth: '10.6%',
    icon: 'active-user',
    color: '#22c55e',
  },
  {
    title: 'Inactive Users',
    value: '1120',
    growth: '50.6%',
    icon: 'inactive-user',
    color: '#a855f7',
  },
  {
    title: 'Blocked Users',
    value: '150',
    growth: '59%',
    icon: 'blocked-user',
    color: '#f97316',
  },
];

export const userData = [
  {
    id: '#USR001',
    name: 'John Doe',
    avatar: '/icons/avatar.png',
    email: 'john@gmail.com',
    phone: '+91 78772 XXXXX',
    status: 'Active',
    type: 'Owner',
    city: 'New York',
    date: 'May 2, 2025',
  },
  {
    id: '#USR002',
    name: 'Michael Brown',
    avatar: '/icons/avatar.png',
    email: 'michael@gmail.com',
    phone: '+91 78772 XXXXX',
    status: 'Active',
    type: 'Agent',
    city: 'Miami',
    date: 'May 5, 2025',
  },
  {
    id: '#USR003',
    name: 'David Wilson',
    avatar: '/icons/avatar.png',
    email: 'david@gmail.com',
    phone: '+91 78772 XXXXX',
    status: 'Inactive',
    type: 'Buyer',
    city: 'Dallas',
    date: 'May 7, 2025',
  },
  {
    id: '#USR004',
    name: 'Emily Davis',
    avatar: '/icons/avatar.png',
    email: 'emily@gmail.com',
    phone: '+91 78772 XXXXX',
    status: 'Active',
    type: 'Agent',
    city: 'Austin',
    date: 'May 12, 2025',
  },
  {
    id: '#USR005',
    name: 'David Warner',
    avatar: '/icons/avatar.png',
    email: 'warner@gmail.com',
    phone: '+91 78772 XXXXX',
    status: 'Blocked',
    type: 'Owner',
    city: 'Los Angeles',
    date: 'May 23, 2025',
  },
  {
    id: '#USR006',
    name: 'Rock San',
    avatar: '/icons/avatar.png',
    email: 'rock@gmail.com',
    phone: '+91 78772 XXXXX',
    status: 'Active',
    type: 'Buyer',
    city: 'Dallas',
    date: 'May 30, 2025',
  },
];

export const salesReportStats = [
  {
    title: 'Total Sale',
    value: '$166,090',
    growth: '15.6%',
    icon: 'dollar',
    color: '#1E0B88',
  },
  {
    title: 'Properties Sold',
    value: '220',
    growth: '10.6%',
    icon: 'calendar',
    color: '#22c55e',
  },
  {
    title: 'Avg Deal Value',
    value: '1120',
    growth: '50.6%',
    icon: 'home',
    color: '#a855f7',
  },
  {
    title: 'Conversion Rate',
    value: '150',
    growth: '59%',
    icon: 'contact',
    color: '#f97316',
  },
];

export const topSoldProperties = [
  {
    property: {
      name: 'Modern Luxury Villa',
      location: 'Beverly Hills, CA',
      image: '/icons/property.png',
    },
    type: 'Villa',
    location: 'California, USA',
    amount: 850000,
    date: 'May 12, 2025',
    client: {
      name: 'John Smith',
      phone: '(555) 123-4567',
    },
    user: {
      name: 'Michael Brown',
      avatar: '/icons/avatar.png',
    },
  },
  {
    property: {
      name: 'Downtown Apartment',
      location: 'New York City',
      image: '/icons/property.png',
    },
    type: 'Apartment',
    location: 'New York, USA',
    amount: 420000,
    date: 'June 5, 2025',
    client: {
      name: 'Emily Davis',
      phone: '(555) 987-6543',
    },
    user: {
      name: 'Sarah Wilson',
      avatar: '/icons/avatar.png',
    },
  },
  {
    property: {
      name: 'Beachfront House',
      location: 'Miami Beach',
      image: '/icons/property.png',
    },
    type: 'House',
    location: 'Florida, USA',
    amount: 670000,
    date: 'June 18, 2025',
    client: {
      name: 'Robert Johnson',
      phone: '(555) 222-3344',
    },
    user: {
      name: 'David Miller',
      avatar: '/icons/avatar.png',
    },
  },
  {
    property: {
      name: 'Luxury Penthouse',
      location: 'Los Angeles',
      image: '/icons/property.png',
    },
    type: 'Penthouse',
    location: 'California, USA',
    amount: 1200000,
    date: 'July 2, 2025',
    client: {
      name: 'Sophia Martinez',
      phone: '(555) 444-5566',
    },
    user: {
      name: 'Chris Evans',
      avatar: '/icons/avatar.png',
    },
  },
  {
    property: {
      name: 'Suburban Family House',
      location: 'Dallas',
      image: '/icons/property.png',
    },
    type: 'House',
    location: 'Texas, USA',
    amount: 310000,
    date: 'July 15, 2025',
    client: {
      name: 'Daniel Lee',
      phone: '(555) 777-8899',
    },
    user: {
      name: 'Olivia Brown',
      avatar: '/icons/avatar.png',
    },
  },
  {
    property: {
      name: 'City Studio Apartment',
      location: 'Chicago',
      image: '/icons/property.png',
    },
    type: 'Apartment',
    location: 'Illinois, USA',
    amount: 210000,
    date: 'August 1, 2025',
    client: {
      name: 'Emma Watson',
      phone: '(555) 333-1122',
    },
    user: {
      name: 'James Anderson',
      avatar: '/icons/avatar.png',
    },
  },
];
