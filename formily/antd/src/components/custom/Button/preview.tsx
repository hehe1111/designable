import React from 'react'
import { Button, ButtonProps } from 'antd'
import { createBehavior, createResource } from '@pind/designable-core'
import { DnFC } from '@pind/designable-react'
import { createFieldSchema } from '../../Field'
import { CustomButton as Setters } from './setters'
import { CustomButton as Locales } from './setters-locales'

import { connect, mapProps, mapReadPretty, ReactFC } from '@formily/react'

export const CustomButton: DnFC<React.ComponentProps<ButtonProps>> = connect(
  Button,
  // mapProps({ ...}),
  mapReadPretty(Button)
)

CustomButton.Behavior = createBehavior({
  name: 'CustomButton',
  extends: ['Field'],
  selector: (node) => node.props['x-component'] === 'CustomButton',
  designerProps: {
    propsSchema: createFieldSchema(Setters),
  },
  designerLocales: Locales,
})

CustomButton.Resource = createResource('Customs', {
  icon: 'ButtonSource',
  elements: [
    {
      componentName: 'Field',
      props: {
        // 字段属性 > 标题
        title: 'Button',
        'x-decorator': 'FormItem',
        'x-component': 'CustomButton',
        'x-component-props': { children: '按钮' },
      },
    },
  ],
})
