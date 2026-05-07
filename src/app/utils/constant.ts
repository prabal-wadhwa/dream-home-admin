export const menuList = [
  { name: 'Dashboard', icon: 'home', route: '/dashboard' },

  {
    name: 'Properties',
    icon: 'home-work',
    expanded: false,
    children: [
      { name: 'All Properties', icon: 'circle', route: '/properties' },
      { name: 'Add New Properties', icon: 'circle', route: '/properties/add-new' },
      { name: 'Property Categories', icon: 'circle', route: '/properties/categories' },
      { name: 'Property Features', icon: 'circle', route: '/properties/features' },
    ],
  },

  { name: 'Users', icon: 'users', route: 'users' },
  {
    name: 'Reports',
    icon: 'reports',
    route: '/reports',
    expanded: false,
    children: [
      { name: 'Overview', icon: 'circle', route: '/reports/overview' },
      { name: 'Sale Reports', icon: 'circle', route: '/reports/sale-reports' },
      { name: 'Booking Reports', icon: 'circle', route: '/reports/booking-reports' },
      { name: 'Payment Reports', icon: 'circle', route: '/reports/payment-reports' },
    ],
  },
  { name: 'Bookings', icon: 'calendar', route: '/bookings' },
  { name: 'Meetings', icon: 'message-square', route: '/meetings' },
  { name: 'Messages', icon: 'message', route: '/messages' },
  {
    name: 'Payments',
    icon: 'credit-card',
    expanded: false,
    route: '/payments',
    children: [
      { name: 'All Payments', icon: 'circle', route: '/payments/all' },
      { name: 'Payment Methods', icon: 'circle', route: '/payments/methods' },
      { name: 'Payment Details', icon: 'circle', route: '/payments/details' },
    ],
  },
];

export const propertyCategories = [
  {
    id: 1,
    name: 'Apartment',
    description: 'Residential properties in buildings',
    properties: 45,
    status: 'Active',
    added_on: '2025-05-02',
  },
  {
    id: 2,
    name: 'Villa',
    description: 'Luxury Villa & Design',
    properties: 40,
    status: 'Active',
    added_on: '2025-05-06',
  },
  {
    id: 3,
    name: 'House',
    description: 'Independent House & Bungalow',
    properties: 55,
    status: 'Active',
    added_on: '2025-06-12',
  },
  {
    id: 4,
    name: 'Commercial',
    description: 'Commercial and office spaces',
    properties: 41,
    status: 'Active',
    added_on: '2025-07-17',
  },
  {
    id: 5,
    name: 'Land',
    description: 'Plots for Sale',
    properties: 35,
    status: 'Active',
    added_on: '2025-07-19',
  },
  {
    id: 6,
    name: 'Studio',
    description: 'Studio apartments and units',
    properties: 20,
    status: 'Inactive',
    added_on: '2025-08-12',
  },
];

export const propertyFeature = [
  {
    id: 1,
    name: 'Swimming pool',
    icon: 'pool',
    status: 'Active',
    added_on: '2025-05-02',
  },
  {
    id: 2,
    name: 'Parking',
    icon: 'car',
    status: 'Active',
    added_on: '2025-05-06',
  },
  {
    id: 3,
    name: 'Air Conditioning',
    icon: 'snowflake',
    status: 'Active',
    added_on: '2025-06-12',
  },
  {
    id: 4,
    name: 'WiFi',
    icon: 'wifi',
    status: 'Active',
    added_on: '2025-07-17',
  },
  {
    id: 5,
    name: 'Gym',
    icon: 'dumbbell',
    status: 'Active',
    added_on: '2025-07-19',
  },
  {
    id: 6,
    name: 'Garden',
    icon: 'plant',
    status: 'Inactive',
    added_on: '2025-08-12',
  },
];

export const propertyList = [
  {
    id: 'PRP001',
    title: 'Modern Luxury Villa',
    type: 'Villa',
    location: 'Beverly Hills, US',
    price: 250000,
    status: 'Published',
    featured: true,
    added_on: '2025-05-02',
    image: '/icons/property.png',
  },
  {
    id: 'PRP002',
    title: 'Family villa',
    type: 'Villa',
    location: 'New York, USA',
    price: 350000,
    status: 'Published',
    featured: true,
    added_on: '2025-06-02',
    image: '/icons/pro-one.png',
  },
  {
    id: 'PRP003',
    title: 'Town Apartment',
    type: 'Apartment',
    location: 'Austin, Texas',
    price: 50000,
    status: 'Published',
    featured: false,
    added_on: '2025-07-15',
    image: '/icons/pro-two.png',
  },
  {
    id: 'PRP004',
    title: 'Beach front House',
    type: 'House',
    location: 'Miami, Florida',
    price: 80000,
    status: 'Pending',
    featured: true,
    added_on: '2025-08-02',
    image: '/icons/pro-3.png',
  },
  {
    id: 'PRP005',
    title: 'Luxury penthouse',
    type: 'Penthouse',
    location: 'Los Angeles, CA',
    price: 135000,
    status: 'Draft',
    featured: false,
    added_on: '2025-08-15',
    image: '/icons/pro-4.png',
  },
  {
    id: 'PRP006',
    title: 'suburn family house',
    type: 'House',
    location: 'Dallas, Texas',
    price: 10000,
    status: 'Published',
    featured: true,
    added_on: '2026-03-02',
    image: '/icons/pro-two.png',
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

export const reportOverviewStats = [
  {
    title: 'Revenue Generated',
    value: '$166,090',
    growth: '15.6%',
    icon: 'wallet',
    color: '#1E0B88',
  },
  {
    title: 'Booking Records',
    value: '220',
    growth: '10.6%',
    icon: 'booking',
    color: '#22c55e',
  },
  {
    title: 'Properties Analyzed',
    value: '1120',
    growth: '50.6%',
    icon: 'home',
    color: '#a855f7',
  },
  {
    title: 'User Activity',
    value: '150',
    growth: '59%',
    icon: 'contact',
    color: '#f97316',
  },
];

export const reportsOverviewChartOptions = {
  tooltip: {
    trigger: 'axis',
    backgroundColor: '#111827',
    borderWidth: 0,
    textStyle: {
      color: '#fff',
    },
    axisPointer: {
      type: 'line',
      lineStyle: {
        color: '#dbe3ea',
        type: 'dashed',
      },
    },
  },

  legend: {
    show: false,
  },

  grid: {
    left: '3%',
    right: '3%',
    bottom: '3%',
    top: '8%',
    containLabel: true,
  },

  xAxis: {
    type: 'category',
    boundaryGap: false,

    data: ['May 01', 'May 08', 'May 15', 'May 22', 'May 29', 'May 31'],

    axisLine: {
      lineStyle: {
        color: '#e5e7eb',
      },
    },

    axisTick: {
      show: false,
    },

    axisLabel: {
      color: '#64748b',
      fontSize: 12,
      margin: 14,
    },
  },

  yAxis: {
    type: 'value',

    min: 0,
    max: 80,
    interval: 20,

    axisLine: {
      show: false,
    },

    axisTick: {
      show: false,
    },

    axisLabel: {
      color: '#64748b',
      formatter: '{value}K',
      fontSize: 12,
    },

    splitLine: {
      lineStyle: {
        color: '#eef2f7',
        type: 'dashed',
      },
    },
  },

  series: [
    /* REVENUE */
    {
      name: 'Revenue',
      type: 'line',

      smooth: true,

      data: [40, 60, 56, 65, 52, 67],

      symbol: 'circle',
      symbolSize: 7,

      lineStyle: {
        width: 3,
        color: '#7c3aed',
      },

      itemStyle: {
        color: '#7c3aed',
        borderColor: '#fff',
        borderWidth: 2,
      },

      areaStyle: {
        opacity: 0.18,

        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,

          colorStops: [
            {
              offset: 0,
              color: 'rgba(124, 58, 237, 0.35)',
            },
            {
              offset: 1,
              color: 'rgba(124, 58, 237, 0)',
            },
          ],
        },
      },
    },

    /* BOOKINGS */
    {
      name: 'Bookings',
      type: 'line',

      smooth: true,

      data: [28, 38, 33, 29, 44, 41],

      symbol: 'circle',
      symbolSize: 6,

      lineStyle: {
        width: 3,
        color: '#10b981',
      },

      itemStyle: {
        color: '#10b981',
        borderColor: '#fff',
        borderWidth: 2,
      },
    },

    /* ENQUIRIES */
    {
      name: 'Enquiries',
      type: 'line',

      smooth: true,

      data: [18, 26, 19, 28, 24, 29],

      symbol: 'circle',
      symbolSize: 6,

      lineStyle: {
        width: 3,
        color: '#f59e0b',
      },

      itemStyle: {
        color: '#f59e0b',
        borderColor: '#fff',
        borderWidth: 2,
      },
    },

    /* SOLD */
    {
      name: 'Properties Sold',
      type: 'line',

      smooth: true,

      data: [4, 12, 6, 10, 14, 19],

      symbol: 'circle',
      symbolSize: 6,

      lineStyle: {
        width: 3,
        color: '#3b82f6',
      },

      itemStyle: {
        color: '#3b82f6',
        borderColor: '#fff',
        borderWidth: 2,
      },
    },
  ],
};

export const reportsOverviewMonthlySummaryData = [
  {
    month: 'May, 2025',
    revenue: '$120,000',
    bookings: 123,
    enquiries: 34,
    propertiesSold: 54,
    avgDealValue: '$20,000',
    concessionRate: '8.9%',
    growth: '+10%',
    progress: 82,
    status: 'excellent',
  },
  {
    month: 'June, 2025',
    revenue: '$145,000',
    bookings: 156,
    enquiries: 48,
    propertiesSold: 61,
    avgDealValue: '$24,500',
    concessionRate: '7.2%',
    growth: '+14%',
    progress: 90,
    status: 'excellent',
  },
  {
    month: 'July, 2025',
    revenue: '$98,000',
    bookings: 101,
    enquiries: 29,
    propertiesSold: 42,
    avgDealValue: '$18,400',
    concessionRate: '10.5%',
    growth: '+6%',
    progress: 64,
    status: 'average',
  },
  {
    month: 'August, 2025',
    revenue: '$168,000',
    bookings: 192,
    enquiries: 57,
    propertiesSold: 79,
    avgDealValue: '$28,000',
    concessionRate: '6.8%',
    growth: '+18%',
    progress: 95,
    status: 'excellent',
  },
  {
    month: 'September, 2025',
    revenue: '$132,500',
    bookings: 148,
    enquiries: 41,
    propertiesSold: 58,
    avgDealValue: '$22,300',
    concessionRate: '8.1%',
    growth: '+11%',
    progress: 78,
    status: 'good',
  },
];

export const reportOverviewTableStats = [
  {
    label: 'Revenue',
    value: '$166,090',
    color: '#7c3aed',
  },
  {
    label: 'Bookings',
    value: '220',
    color: '#10b981',
  },
  {
    label: 'Enquiries',
    value: '340',
    color: '#f59e0b',
  },
  {
    label: 'Properties Sold',
    value: '54',
    color: '#3b82f6',
  },
];

export const reportsOverviewPieChartData = {
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

export const bookingsReportsStats = [
  {
    title: 'Total Bookings',
    value: '128',
    growth: '15.6%',
    icon: 'booking',
    color: '#1E0B88',
  },
  {
    title: 'Confirmed Bookings',
    value: '220',
    growth: '10.6%',
    icon: 'check',
    color: '#22c55e',
  },
  {
    title: 'Pending Bookings',
    value: '322',
    growth: '50.6%',
    icon: 'clock',
    color: '#a855f7',
  },
  {
    title: 'Cancelled Bookings',
    value: '10',
    growth: '59%',
    icon: 'cross',
    color: '#f97316',
  },
];

export const bookingReportsChartOverview = {
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
        { value: 50, name: 'Completed', itemStyle: { color: '#22c55e' } },
        { value: 30, name: 'Cancelled', itemStyle: { color: '#4f46e5' } },
        { value: 20, name: 'Pending', itemStyle: { color: '#f59e0b' } },
      ],
    },
  ],
};

export const recentBookingsData = [
  {
    bookingId: '#BK00128',
    propertyName: 'Modern Luxury Villa',
    propertyLocation: 'Beverly Hills, CA',
    propertyImage: '/icons/property.png',
    userName: 'Michael Brown',
    userAvatar: '/icons/avatar.png',
    status: 'Confirmed',
    bookedOn: 'June 2, 2025',
    amount: '$2,699',
  },
  {
    bookingId: '#BK00127',
    propertyName: 'Downtown Apartment',
    propertyLocation: 'New York, USA',
    propertyImage: '/icons/property.png',
    userName: 'Emily Davis',
    userAvatar: '/icons/avatar.png',
    status: 'Confirmed',
    bookedOn: 'July 15, 2025',
    amount: '$4,600',
  },
  {
    bookingId: '#BK00126',
    propertyName: 'Family House',
    propertyLocation: 'Austin, Texas',
    propertyImage: '/icons/property.png',
    userName: 'Michael Jordan',
    userAvatar: '/icons/avatar.png',
    status: 'Pending',
    bookedOn: 'August 2, 2025',
    amount: '$23,699',
  },
  {
    bookingId: '#BK00125',
    propertyName: 'Luxury Penthouse',
    propertyLocation: 'Miami, Florida',
    propertyImage: '/icons/property.png',
    userName: 'Rock Johnson',
    userAvatar: '/icons/avatar.png',
    status: 'Confirmed',
    bookedOn: 'August 15, 2025',
    amount: '$50,000',
  },
  {
    bookingId: '#BK00124',
    propertyName: 'Beachfront House',
    propertyLocation: 'Los Angeles, CA',
    propertyImage: '/icons/property.png',
    userName: 'Sophia Williams',
    userAvatar: '/icons/avatar.png',
    status: 'Cancelled',
    bookedOn: 'September 10, 2025',
    amount: '$18,500',
  },
  {
    bookingId: '#BK00123',
    propertyName: 'Suburban Family Home',
    propertyLocation: 'Dallas, Texas',
    propertyImage: '/icons/property.png',
    userName: 'Daniel Carter',
    userAvatar: '/icons/avatar.png',
    status: 'Confirmed',
    bookedOn: 'October 5, 2025',
    amount: '$9,250',
  },
];

export const recentPaymentsData = [
  {
    transactionId: '#BK00128',
    propertyName: 'Modern Luxury Villa',
    propertyLocation: 'Beverly Hills, CA',
    propertyImage: '/icons/property.png',
    userName: 'Michael Brown',
    userAvatar: '/icons/avatar.png',
    status: 'Confirmed',
    bookedOn: 'June 2, 2025',
    amount: '$2,699',
    method: 'Credit Card',
  },
  {
    transactionId: '#BK00127',
    propertyName: 'Downtown Apartment',
    propertyLocation: 'New York, USA',
    propertyImage: '/icons/property.png',
    userName: 'Emily Davis',
    userAvatar: '/icons/avatar.png',
    status: 'Confirmed',
    bookedOn: 'July 15, 2025',
    amount: '$4,600',
    method: 'Bank Transfer',
  },
  {
    transactionId: '#BK00126',
    propertyName: 'Family House',
    propertyLocation: 'Austin, Texas',
    propertyImage: '/icons/property.png',
    userName: 'Michael Jordan',
    userAvatar: '/icons/avatar.png',
    status: 'Pending',
    bookedOn: 'August 2, 2025',
    amount: '$23,699',
    method: 'Cash',
  },
  {
    transactionId: '#BK00125',
    propertyName: 'Luxury Penthouse',
    propertyLocation: 'Miami, Florida',
    propertyImage: '/icons/property.png',
    userName: 'Rock Johnson',
    userAvatar: '/icons/avatar.png',
    status: 'Confirmed',
    bookedOn: 'August 15, 2025',
    amount: '$50,000',
    method: 'Credit Card',
  },
  {
    transactionId: '#BK00124',
    propertyName: 'Beachfront House',
    propertyLocation: 'Los Angeles, CA',
    propertyImage: '/icons/property.png',
    userName: 'Sophia Williams',
    userAvatar: '/icons/avatar.png',
    status: 'Cancelled',
    bookedOn: 'September 10, 2025',
    amount: '$18,500',
    method: 'Credit Card',
  },
  {
    transactionId: '#BK00123',
    propertyName: 'Suburban Family Home',
    propertyLocation: 'Dallas, Texas',
    propertyImage: '/icons/property.png',
    userName: 'Daniel Carter',
    userAvatar: '/icons/avatar.png',
    status: 'Confirmed',
    bookedOn: 'October 5, 2025',
    amount: '$9,250',
    method: 'Paypal',
  },
];

export const allBookingsData = [
  {
    bookingId: '#BK00128',
    propertyName: 'Modern Luxury Villa',
    propertyLocation: 'Beverly Hills, CA',
    propertyImage: '/icons/property.png',
    userName: 'Michael Brown',
    userAvatar: '/icons/avatar.png',
    status: 'Confirmed',
    bookedOn: 'June 2, 2025',
    amount: '$2,699',
    payment: 'Confirmed',
    clientName: 'Jordan',
  },
  {
    bookingId: '#BK00127',
    propertyName: 'Downtown Apartment',
    propertyLocation: 'New York, USA',
    propertyImage: '/icons/property.png',
    userName: 'Emily Davis',
    userAvatar: '/icons/avatar.png',
    status: 'Confirmed',
    bookedOn: 'July 15, 2025',
    amount: '$4,600',
    payment: 'Pending',
    clientName: 'Frank',
  },
  {
    bookingId: '#BK00126',
    propertyName: 'Family House',
    propertyLocation: 'Austin, Texas',
    propertyImage: '/icons/property.png',
    userName: 'Michael Jordan',
    userAvatar: '/icons/avatar.png',
    status: 'Pending',
    bookedOn: 'August 2, 2025',
    amount: '$23,699',
    payment: 'Refund',
    clientName: 'Martin',
  },
  {
    bookingId: '#BK00125',
    propertyName: 'Luxury Penthouse',
    propertyLocation: 'Miami, Florida',
    propertyImage: '/icons/property.png',
    userName: 'Rock Johnson',
    userAvatar: '/icons/avatar.png',
    status: 'Confirmed',
    bookedOn: 'August 15, 2025',
    amount: '$50,000',
    payment: 'Confirmed',
    clientName: 'Justin',
  },
  {
    bookingId: '#BK00124',
    propertyName: 'Beachfront House',
    propertyLocation: 'Los Angeles, CA',
    propertyImage: '/icons/property.png',
    userName: 'Sophia Williams',
    userAvatar: '/icons/avatar.png',
    status: 'Cancelled',
    bookedOn: 'September 10, 2025',
    amount: '$18,500',
    payment: 'Confirmed',
    clientName: 'Ferry',
  },
  {
    bookingId: '#BK00123',
    propertyName: 'Suburban Family Home',
    propertyLocation: 'Dallas, Texas',
    propertyImage: '/icons/property.png',
    userName: 'Daniel Carter',
    userAvatar: '/icons/avatar.png',
    status: 'Confirmed',
    bookedOn: 'October 5, 2025',
    amount: '$9,250',
    payment: 'Confirmed',
    clientName: 'Lusy',
  },
];

export const allMeetingData = [
  {
    meetingId: '#MTG001',
    propertyName: 'Modern Luxury Villa',
    propertyLocation: 'Beverly Hills, CA',
    propertyImage: '/icons/property.png',
    status: 'Confirmed',
    bookedOn: 'June 2, 2025',
    type: 'In-Person',
    clientName: 'Jordan Smith',
    clientEmail: 'jordan.smith@gmail.com',
    clientPhoneNumber: '+91 9876543210',
  },
  {
    meetingId: '#MTG002',
    propertyName: 'Downtown Apartment',
    propertyLocation: 'New York, USA',
    propertyImage: '/icons/property.png',
    status: 'Pending',
    bookedOn: 'June 5, 2025',
    type: 'Virtual',
    clientName: 'Emily Johnson',
    clientEmail: 'emily.johnson@gmail.com',
    clientPhoneNumber: '+91 9988776655',
  },
  {
    meetingId: '#MTG003',
    propertyName: 'Beachfront House',
    propertyLocation: 'Miami, Florida',
    propertyImage: '/icons/property.png',
    status: 'Cancelled',
    bookedOn: 'June 8, 2025',
    type: 'In-Person',
    clientName: 'Michael Brown',
    clientEmail: 'michael.brown@gmail.com',
    clientPhoneNumber: '+91 9123456780',
  },
  {
    meetingId: '#MTG004',
    propertyName: 'Luxury Penthouse',
    propertyLocation: 'Los Angeles, CA',
    propertyImage: '/icons/property.png',
    status: 'Confirmed',
    bookedOn: 'June 10, 2025',
    type: 'Virtual',
    clientName: 'Sophia Williams',
    clientEmail: 'sophia.williams@gmail.com',
    clientPhoneNumber: '+91 9871204567',
  },
  {
    meetingId: '#MTG005',
    propertyName: 'Family House',
    propertyLocation: 'Austin, Texas',
    propertyImage: '/icons/property.png',
    status: 'Pending',
    bookedOn: 'June 12, 2025',
    type: 'In-Person',
    clientName: 'Daniel Carter',
    clientEmail: 'daniel.carter@gmail.com',
    clientPhoneNumber: '+91 9812345678',
  },
  {
    meetingId: '#MTG006',
    propertyName: 'Suburban Family Home',
    propertyLocation: 'Dallas, Texas',
    propertyImage: '/icons/property.png',
    status: 'Confirmed',
    bookedOn: 'June 14, 2025',
    type: 'Virtual',
    clientName: 'Olivia Martinez',
    clientEmail: 'olivia.martinez@gmail.com',
    clientPhoneNumber: '+91 9090909090',
  },
  {
    meetingId: '#MTG007',
    propertyName: 'Skyline Apartment',
    propertyLocation: 'Chicago, Illinois',
    propertyImage: '/icons/property.png',
    status: 'Confirmed',
    bookedOn: 'June 18, 2025',
    type: 'In-Person',
    clientName: 'William Anderson',
    clientEmail: 'william.anderson@gmail.com',
    clientPhoneNumber: '+91 9001122334',
  },
];
