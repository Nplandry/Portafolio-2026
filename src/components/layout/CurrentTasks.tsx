import { currentTasks } from "@/data/currentTasks";
import { cardStyle, colors } from "@/styles/theme";

export function CurrentTasks() {
  return (
    <div className="current-tasks" style={{ ...cardStyle, color: colors.text }}>
      <h3 className="current-tasks__title">En qué estoy</h3>
      <ul className="current-tasks__list">
        {currentTasks.map((task, index) => (
          <li
            key={task.id}
            className="current-tasks__item"
            style={{
              borderBottom: index < currentTasks.length - 1 ? `1px solid ${colors.border}` : "none",
            }}
          >
            <span
              className="current-tasks__index"
              style={{ color: task.enCurso ? colors.text : colors.mutedDark }}
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className="current-tasks__content">
              <p style={{ margin: 0, fontSize: "14px", color: colors.muted }}>{task.text}</p>
              <p style={{ margin: "2px 0 0", fontSize: "12px", color: colors.mutedDark }}>
                {task.date}
                {index === 0 ? " · más reciente" : ""}
              </p>
            </div>

            <span
              className={`current-tasks__status ${task.enCurso ? "current-tasks__status--active" : "current-tasks__status--done"}`}
              title={task.enCurso ? "En curso" : "Finalizada"}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
