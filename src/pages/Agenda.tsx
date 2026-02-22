import { Plus, ChevronLeft, ChevronRight, Clock, Video, Phone, Users as UsersIcon } from "lucide-react";
import { useState } from "react";

const daysOfWeek = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year: number, month: number) {
  return new Date(year, month, 1).getDay();
}

const monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

export default function Agenda() {
  const [currentDate, setCurrentDate] = useState(new Date(2026, 1));
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfMonth(year, month);
  const today = new Date();

  const prevMonth = () => setCurrentDate(new Date(year, month - 1));
  const nextMonth = () => setCurrentDate(new Date(year, month + 1));

  const days: (number | null)[] = [];
  for (let i = 0; i < firstDay; i++) days.push(null);
  for (let i = 1; i <= daysInMonth; i++) days.push(i);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Agenda</h1>
          <p className="text-sm text-muted-foreground">Gerencie suas reuniões e compromissos</p>
        </div>
        <button className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-secondary transition-colors">
          <Plus className="mr-1 inline h-4 w-4" /> Novo Agendamento
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Calendar */}
        <div className="col-span-2 rounded-xl border border-border bg-card p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <button onClick={prevMonth} className="text-muted-foreground hover:text-foreground"><ChevronLeft className="h-5 w-5" /></button>
              <h2 className="text-lg font-semibold text-card-foreground">
                {monthNames[month]} <span className="text-primary">{year}</span>
              </h2>
              <button onClick={nextMonth} className="text-muted-foreground hover:text-foreground"><ChevronRight className="h-5 w-5" /></button>
            </div>
            <button className="rounded-lg border border-border px-3 py-1.5 text-sm text-muted-foreground hover:bg-muted transition-colors">Mês</button>
          </div>

          <div className="grid grid-cols-7 gap-px">
            {daysOfWeek.map((d) => (
              <div key={d} className="py-2 text-center text-xs font-semibold text-muted-foreground">{d}</div>
            ))}
            {days.map((day, i) => {
              const isToday = day === today.getDate() && month === today.getMonth() && year === today.getFullYear();
              return (
                <div
                  key={i}
                  className={`min-h-[80px] border border-border p-2 text-sm ${
                    day ? "text-foreground hover:bg-muted/50 cursor-pointer" : "bg-muted/30"
                  } ${isToday ? "bg-primary/10" : ""}`}
                >
                  {day && (
                    <span className={`${isToday ? "text-primary font-bold" : ""}`}>{day}</span>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Side */}
        <div className="space-y-6">
          <div className="rounded-xl border border-border bg-card p-6">
            <h3 className="text-lg font-semibold text-card-foreground flex items-center gap-2 mb-4">
              <Clock className="h-5 w-5 text-destructive" /> Próximos Eventos
            </h3>
            <p className="text-sm text-muted-foreground">Sem eventos próximos.</p>
          </div>

          <div className="rounded-xl border border-border bg-card p-6">
            <h3 className="text-lg font-semibold text-card-foreground mb-4">Resumo do Mês</h3>
            <div className="space-y-3">
              {[
                { label: "Videochamadas", value: 0, icon: Video, color: "text-success" },
                { label: "Ligações", value: 0, icon: Phone, color: "text-success" },
                { label: "Presenciais", value: 0, icon: UsersIcon, color: "text-primary" },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{item.label}</span>
                  <span className={`text-sm font-semibold ${item.color} bg-current/10 rounded-full px-2 py-0.5`}>
                    <span className={item.color}>{item.value}</span>
                  </span>
                </div>
              ))}
              <div className="border-t border-border pt-3 flex items-center justify-between">
                <span className="text-sm font-semibold text-foreground">Total</span>
                <span className="text-sm font-bold text-destructive bg-destructive/10 rounded-full px-2 py-0.5">0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
