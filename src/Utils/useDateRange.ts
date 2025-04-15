export default function useDateRange(){
    const fecha = new Date()
    const firstDayOfMonth = new Date(fecha.getFullYear(), fecha.getMonth(), 1)
  
    const isDesde = firstDayOfMonth.toISOString().split('T')[0]
    const isHasta = fecha.toISOString().split('T')[0]
  
    return { isDesde, isHasta }
}