(function (window) {
    "use strict";

    class ToastManager {
        constructor(options = {}) {
            this.container = null;
            this.defaultOptions = {
                position: "bottom-center",
                duration: 5000,
                gap: 12,
                zIndex: 9999,
                maxWidth: 500,
                minWidth: 280,
                mobileMaxWidth: "95%",
            };
            this.options = { ...this.defaultOptions, ...options };
            this._initContainer();
            this._addResponsiveStyles();
        }

        _addResponsiveStyles() {
            const styleElement = document.createElement("style");
            styleElement.textContent = `
            @media (max-width: 600px) {
                .toast-container {
                    width: 100% !important;
                    left: 0 !important;
                    right: 0 !important;
                    padding: 10px !important;
                    align-items: center !important;
                }
                .toast {
                    width: ${this.options.mobileMaxWidth} !important;
                    max-width: ${this.options.mobileMaxWidth} !important;
                    margin: 0 auto !important;
                    box-sizing: border-box !important;
                }
            }
        `;
            document.head.appendChild(styleElement);
        }

        _initContainer() {
            if (!this.container) {
                this.container = document.createElement("div");
                this.container.className = "toast-container";
                this.container.style.cssText = `
                position: fixed;
                z-index: ${this.options.zIndex};
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 16px;
                gap: ${this.options.gap}px;
                pointer-events: none;
                width: 100%;
                max-width: 100%;
                box-sizing: border-box;
                overflow: hidden;
            `;

                this._setContainerPosition(this.options.position);
                document.body.appendChild(this.container);
            }
        }

        _setContainerPosition(position) {
            // Reset previous positioning
            this.container.style.top = "auto";
            this.container.style.bottom = "auto";
            this.container.style.left = "auto";
            this.container.style.right = "auto";
            this.container.style.alignItems = "center";

            switch (position) {
                case "top-right":
                    this.container.style.top = "0";
                    this.container.style.right = "0";
                    this.container.style.alignItems = "flex-end";
                    break;
                case "top-left":
                    this.container.style.top = "0";
                    this.container.style.left = "0";
                    this.container.style.alignItems = "flex-start";
                    break;
                case "bottom-left":
                    this.container.style.bottom = "0";
                    this.container.style.left = "0";
                    this.container.style.alignItems = "flex-start";
                    break;
                case "top-center":
                    this.container.style.top = "0";
                    break;
                case "bottom-right":
                    this.container.style.bottom = "0";
                    this.container.style.right = "0";
                    this.container.style.alignItems = "flex-end";
                    break;
                case "bottom-center":
                default:
                    this.container.style.bottom = "0";
                    break;
            }
        }

        _createToastElement(message, type = "default", options = {}) {
            const { title } = options;

            // Création du toast
            const toast = document.createElement("div");
            toast.className = `toast toast-${type}`;

            // Conteneurs
            const contentWrapper = document.createElement("div");
            contentWrapper.style.cssText = `
            display: flex;
            flex-direction: column;
            flex-grow: 1;
            min-width: 0;
            overflow: hidden;
        `;

            // Styles des types de toast
            const typeStyles = {
                default: {
                    background: "hsl(0 0% 100%)",
                    border: "hsl(214.3 31.8% 91.4%)",
                    icon: "🔔",
                    color: "hsl(222.2 47.4% 11.2%)",
                    borderColor: "hsl(214.3 31.8% 91.4%)",
                },
                success: {
                    background: "hsl(143.6 64.4% 96.7%)",
                    border: "hsl(142.1 76.2% 36.3%)",
                    icon: "✅",
                    color: "hsl(142.1 76.2% 26.3%)",
                    borderColor: "hsl(142.1 76.2% 36.3%)",
                },
                error: {
                    background: "hsl(359 100% 97.4%)",
                    border: "hsl(359 100% 45.5%)",
                    icon: "❌",
                    color: "hsl(359 100% 35.5%)",
                    borderColor: "hsl(359 100% 45.5%)",
                },
                warning: {
                    background: "hsl(39 100% 96.3%)",
                    border: "hsl(38 92.2% 50.2%)",
                    icon: "⚠️",
                    color: "hsl(38 92.2% 40.2%)",
                    borderColor: "hsl(38 92.2% 50.2%)",
                },
                info: {
                    background: "hsl(209 95.5% 96.7%)",
                    border: "hsl(204 94.4% 52.1%)",
                    icon: "ℹ️",
                    color: "hsl(204 94.4% 42.1%)",
                    borderColor: "hsl(204 94.4% 52.1%)",
                },
            };

            const styles = typeStyles[type] || typeStyles.default;

            // Icône
            const iconElement = document.createElement("span");
            iconElement.textContent = styles.icon;
            iconElement.style.cssText = `
            font-size: 1.25rem;
            margin-right: 0.625rem;
            flex-shrink: 0;
        `;

            // Titre
            if (title) {
                const titleElement = document.createElement("div");
                titleElement.textContent = title;
                titleElement.style.cssText = `
                font-weight: 600;
                color: ${styles.color};
                line-height: 1.4;
                overflow: hidden;
                text-overflow: ellipsis;
            `;
                contentWrapper.appendChild(titleElement);
            }

            // Message
            const messageElement = document.createElement("div");
            messageElement.textContent = message;
            messageElement.style.cssText = `
            color: ${styles.color};
            font-size: 0.875rem;
            line-height: 1.4;
            overflow: hidden;
            text-overflow: ellipsis;
        `;
            contentWrapper.appendChild(messageElement);

            // Bouton de fermeture
            const closeButton = document.createElement("button");
            closeButton.innerHTML = "&times;";
            closeButton.style.cssText = `
            background: none;
            border: none;
            color: ${styles.color};
            font-size: 1.5rem;
            cursor: pointer;
            padding: 0;
            line-height: 1;
            margin-left: auto;
            opacity: 0.5;
            transition: opacity 0.2s;
        `;
            closeButton.addEventListener("click", () => this.dismiss(toast));
            closeButton.addEventListener("hover", (e) => {
                e.target.style.opacity = "1";
            });

            // Conteneur principal
            const toastContent = document.createElement("div");
            toastContent.style.cssText = `
            display: flex;
            align-items: center;
            width: 100%;
            gap: 0.75rem;
        `;

            toastContent.append(iconElement, contentWrapper, closeButton);

            // Style du toast
            toast.style.cssText = `
            width: auto;
            max-width: ${this.options.maxWidth}px;
            min-width: ${this.options.minWidth}px;
            background: ${styles.background};
            border: 1px solid ${styles.borderColor};
            border-radius: 0.5rem;
            padding: 0.75rem 1rem;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            display: flex;
            align-items: center;
            opacity: 0;
            transform: translateY(20px);
            transition: all 0.3s ease-in-out;
            pointer-events: auto;
            box-sizing: border-box;
            overflow: hidden;
        `;

            toast.appendChild(toastContent);

            return toast;
        }

        show(message, options = {}) {
            const { type = "default", duration = this.options.duration } =
                options;

            const toast = this._createToastElement(message, type, options);
            this.container.appendChild(toast);

            // Déclencher le rendu
            requestAnimationFrame(() => {
                toast.style.opacity = "1";
                toast.style.transform = "translateY(0)";
            });

            // Disparition automatique
            if (duration > 0) {
                const dismissTimer = setTimeout(() => {
                    this.dismiss(toast);
                }, duration);

                // Annuler le timer au survol
                toast.addEventListener("mouseenter", () =>
                    clearTimeout(dismissTimer)
                );
            }

            return toast;
        }

        dismiss(toast) {
            toast.style.opacity = "0";
            toast.style.transform = "translateY(20px)";

            setTimeout(() => {
                toast.remove();
            }, 300);
        }

        // Méthodes rapides pour différents types de toast
        success(message, options = {}) {
            return this.show(message, {
                ...options,
                type: "success",
            });
        }

        error(message, options = {}) {
            return this.show(message, {
                ...options,
                type: "error",
            });
        }

        warning(message, options = {}) {
            return this.show(message, {
                ...options,
                type: "warning",
            });
        }

        info(message, options = {}) {
            return this.show(message, { ...options, type: "info" });
        }
    }
    // Expose globally for easy CDN usage
    window.ToastManager = ToastManager;
})(typeof window !== "undefined" ? window : this);
