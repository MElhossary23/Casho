
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				purple: {
					DEFAULT: '#8512D9',
					50: '#E8D0FF',
					100: '#D9B6FF',
					200: '#C282FF',
					300: '#AB4EFF',
					400: '#941AFF',
					500: '#8512D9',
					600: '#6C0FB2',
					700: '#530C8B',
					800: '#3B0864',
					900: '#22053D',
					950: '#150326'
				},
				neon: {
					blue: '#1AFAFE',
					pink: '#F835FF',
					yellow: '#FFEB3B'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'pulse-neon': {
					'0%, 100%': { 
						opacity: '1',
						filter: 'brightness(1) drop-shadow(0 0 5px rgba(250, 250, 250, 0.7))'
					},
					'50%': { 
						opacity: '0.8',
						filter: 'brightness(1.2) drop-shadow(0 0 8px rgba(250, 250, 250, 0.9))'
					}
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-8px)' }
				},
				'glow': {
					'0%, 100%': { filter: 'drop-shadow(0 0 2px rgba(250, 250, 250, 0.7))' },
					'50%': { filter: 'drop-shadow(0 0 8px rgba(26, 250, 254, 0.9))' }
				},
				'fade-in-up': {
					'0%': { 
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': { 
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'scale-in': {
					'0%': { 
						opacity: '0', 
						transform: 'scale(0.95)'
					},
					'100%': { 
						opacity: '1', 
						transform: 'scale(1)'
					}
				},
				'shimmer': {
					'100%': {
						transform: 'translateX(100%)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'pulse-neon': 'pulse-neon 2s infinite',
				'float': 'float 3s ease-in-out infinite',
				'glow': 'glow 2s ease-in-out infinite',
				'fade-in-up': 'fade-in-up 0.5s forwards',
				'scale-in': 'scale-in 0.3s ease-out forwards',
				'shimmer': 'shimmer 2.5s infinite'
			},
			backdropFilter: {
				'none': 'none',
				'blur': 'blur(8px)'
			},
			backgroundImage: {
				'purple-gradient': 'linear-gradient(135deg, #34073D 0%, #8512D9 100%)',
				'card-gradient': 'linear-gradient(135deg, rgba(117, 21, 179, 0.5) 0%, rgba(92, 15, 141, 0.7) 100%)',
				'glow-radial': 'radial-gradient(circle, rgba(133, 18, 217, 0.3) 0%, rgba(26, 2, 48, 0) 70%)',
				'shimmer': 'linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.1) 50%, rgba(255, 255, 255, 0) 100%)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
