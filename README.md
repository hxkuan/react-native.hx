## demo管理
### - react-native-split

andorid native 集成react native，分包加载。

本文的RN代码基于0.43版本   http://blog.desmondyao.com/rn-split/

1. base模块初始化是就加载，只加载一次
2. 业务模块（SampleA……）在开启页面时加载，只加载一次
3. 不能简单的将"assets://"改为"http://"加载文件