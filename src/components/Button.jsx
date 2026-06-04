export default function Button({
           label,
           icon = null,
           iconPosition = "left",
           onClick = () => {},
           type = "button", // 👈 supports 'submit' for forms
           disabled = false,
           loading = false, // ✅ new prop
           variant = "primary",
           size = "normal",
           ariaLabel,
           ariaPressed,
           ariaExpanded,
           fullWidth = false, // ✅ new prop for layout
           fixedWidth = null,
           fixedLabelWidth = null,
           cn = "",
           ...rest
       }) {
    const hasIcon = !!icon && !loading; // Hide icon when loading
    const isLeft = iconPosition === "left";

    const ariaProps = {};
    if (ariaLabel) ariaProps["aria-label"] = ariaLabel;
    if (ariaPressed !== undefined) ariaProps["aria-pressed"] = ariaPressed;
    if (ariaExpanded !== undefined) ariaProps["aria-expanded"] = ariaExpanded;

    const style = {};
    if (fixedWidth)
        style.width = typeof fixedWidth === "number" ? `${fixedWidth}px` : fixedWidth;
    if (fullWidth) style.width = "100%"; // ✅ allows full-width buttons (mobile-friendly)

    return (
        <button
            type={type}
            disabled={disabled || loading}
            onClick={onClick}
            style={style}
            className={`cog-btn cog-btn--${variant} ${cn} cog-btn--${size} ${
                disabled || loading ? "is-disabled" : ""
            } ${fullWidth ? "is-fullwidth" : ""}`}
            {...ariaProps}
        >
            {/* Left icon */}
            {hasIcon && isLeft && (
                typeof icon === "string" ? (
                    <img
                        src={icon}
                        alt=""
                        aria-hidden="true"
                        className="cog-btn__icon"
                    />
                ) : (
                    <span className="cog-btn__icon" aria-hidden="true">
            {icon}
          </span>
                )
            )}

            {/* Label or loading spinner */}
            <span
                className="cog-btn__label"
                style={
                    fixedLabelWidth
                        ? { display: "inline-block", width: fixedLabelWidth }
                        : {}
                }
            >
        {loading ? "Loading…" : label}
      </span>

            {/* Right icon */}
            {hasIcon && !isLeft && (
                typeof icon === "string" ? (
                    <img
                        src={icon}
                        alt=""
                        aria-hidden="true"
                        className="cog-btn__icon"
                    />
                ) : (
                    <span className="cog-btn__icon" aria-hidden="true">
            {icon}
          </span>
                )
            )}

            {/* Optional spinner for loading state */}
            {loading && (
                <span
                    className="cog-btn__spinner"
                    role="status"
                    aria-live="polite"
                    aria-label="Loading"
                />
            )}
        </button>
    );
}
