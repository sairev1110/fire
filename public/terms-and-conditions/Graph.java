class Graph{
    ArrayList<LinkedList<Integer>> lis;
    Graph(int n){
        this.lis = new ArrayList<>(n);
    }

    public int addNode(int a,int b,boolean uni){
        lis.get(a).add(new LinkedList<Integer>());
        if(uni){
            lis.get(b).addLast(a);
        }
    }
}