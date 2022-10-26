namespace DefaultNamespace;

public class Solution {
    public IList<IList<int>> LevelOrder(TreeNode root) {
        
        if(root == null)
        {
            return new List<IList<int>>();
        }
        
        var queue = new Queue<TreeNode>();
        queue.Enqueue(root);
        var result = new List<IList<int>>();
            
        while(queue.Count > 0)
        {
            var count = queue.Count;
            var level = new List<int>();
            for(int i =0; i<count; i++)
            {
            
                var node = queue.Dequeue();
                level.Add(node.val);
            
                if(node.left != null)
                {
                    queue.Enqueue(node.left);
                }
                if(node.right != null)
                {
                    queue.Enqueue(node.right);
                }
            }
            
            result.Add(level);
        }
        
        return result;
    }
}
