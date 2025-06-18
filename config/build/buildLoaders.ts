import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import webpack from 'webpack'
import { BuildOptions } from './types/config'

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
  const svgLoader = {
    test: /\.svg$/i,
    use: ['@svgr/webpack'],
  }

  const babelLoader = {
    test: /\.(?:js|mjs|cjs|tsx|jsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        targets: 'defaults',
        presets: [['@babel/preset-env']],
        plugins: [['i18next-extract', { locales: ['ru', 'en'], keyAsDefaultValue: true }]],
      },
    },
  }

  const cssLoader = {
    test: /\.(s[ac]|c)ss$/i,
    use: [
      options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (resPath: string) => Boolean(resPath.includes('.module.')),
            localIdentName: options.isDev ? '[path][name]__[local]' : '[hash:base64:8]',
          },
        },
      },
      'sass-loader',
    ],
  }

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff|woff2)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  }

  return [fileLoader, svgLoader, babelLoader, typescriptLoader, cssLoader]
}
