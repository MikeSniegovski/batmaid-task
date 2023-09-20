
const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const getWeekDay = (date: Date): string => days[date.getDay()];

const getMonth = (date: Date): string => months[date.getMonth()];

const formatDate = (date: Date): string => `${getWeekDay(date)}, ${getMonth(date)} ${date.getDate()}`

const formatTime = (date: Date): string => `${date.getHours()}:${date.getMinutes()}`

const addHours = (date:Date, hours: number) => new Date().setTime(date.getTime() + (hours*60*60*1000))

export {formatDate, formatTime, addHours}